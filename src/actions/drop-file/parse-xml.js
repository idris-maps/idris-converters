var gpx2points = require('./gpx-to-points')

module.exports = function(string, callback) {
	parseXML(string, function(err0, xml) {
		if(err0) { callback(err0) }
		else {
			gpx2points(xml, function(err1, points) {
				callback(err1, points)
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
