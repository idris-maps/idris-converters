module.exports = function(string, callback) {
	console.log('parse gpx')
	parseXML(string, function(err0, xml) {
		if(err0) { callback(err0) }
		else {
			parseGPX(xml, function(err1, points) {
				console.log(err1, points)
			})
		}
	})
}

function parseXML(string, callback) {
	if(window.DOMParser) {
		var parser = new window.DOMParser()
		callback(null, parser.parseFromString(string, 'text/xml'))
 } else {
		callback('Your browser does not support \"DOMParser\"')
	}
}

function parseGPX(xml, callback) {
	var gpx = xml.children[0]
	if(gpx.nodeName !== 'gpx') { callback('Not a valid GPX file') }
	else {
		parseRoot(gpx, function(points) {
			callback(null, points)
		})
	}
}

function parseRoot(gpx, callback) {
	gpxLoop(0, gpx.children, [], function(pts) {
		callback(pts)
	})
}

function parseTrk(trk, callback) {
	trkLoop(0, trk.children, [], function(pts) { 
		callback(pts)
	})
}

function parseTrkseg(trkseg, callback) {
	trksegLoop(0, trkseg.children, [], function(trkpts) {
		callback(trkpts)
	})
}

function parseTrkpt(trkpt, callback) {
	var o = {}
	var attrs = trkpt.attributes
	for(i=0;i<attrs.length;i++) {
		if(attrs[i].name === 'lat') { o.lat = +attrs[i].value }
		if(attrs[i].name === 'lon') { o.lon = +attrs[i].value }
	}
	var childs = trkpt.children
	for(j=0;j<childs.length;j++) {
		if(childs[j].nodeName === 'ele') {
			o.ele = +childs[j].textContent
		}
		if(childs[j].nodeName === 'time') {
			var d = new Date(childs[j].textContent)
			o.time = Date.parse(d)
		}
	}
	if(o.lat && o.lon) {
		callback(o)
	} else {
		callback(null)
	}
}

function gpxLoop(i, children, trks, callback) {
	console.log('gpxLoop')
	if(i === children.length) { callback(trks) }
	else {
		if(children[i].tagName === 'trk') {
			parseTrk(children[i], function(pts) {
				pts.forEach(function(pt) { trks.push(pt) })
				gpxLoop(i+1, children, trks, callback)
			})
		} else {
			gpxLoop(i+1, children, trks, callback)
		}
	}
}

function trkLoop(i, children, trksegs, callback) {
	if(i === children.length) { callback(trksegs) }
	else {
		if(children[i].tagName === 'trkseg') {
			parseTrkseg(children[i], function(trkpts) { 
				trkpts.forEach(function(pt) { trksegs.push(pt) })
				trkLoop(i+1, children, trksegs, callback)
			})
		} else {
			trkLoop(i+1, children, trksegs, callback)
		}
	}
}

function trksegLoop(i, children, trkpts, callback) {
	if(i === children.length) { callback(trkpts) }
	else {
		if(children[i].tagName === 'trkpt') {
			parseTrkpt(children[i], function(pt) { 
				if(pt) { trkpts.push(pt) }
				if(Math.floor(i/1000) === i/1000) {
					setTimeout(function() {
						trksegLoop(i+1, children, trkpts, callback)
					},1)
				} else {
					trksegLoop(i+1, children, trkpts, callback)
				}
			})
		} else {
			trksegLoop(i+1, children, trkpts, callback)
		}
	}
}
