var wkt = require('wellknown')

module.exports = function(head, rows, geom) {
	var feats = rows.map( (row) => {
		var geo = getProps(head, row, geom)
		if(geo) {
			return getFeat(geo, getGeom(head, row, geom))
		}
	})
	return { type: 'FeatureCollection', features: feats }
}

function getProps(head, row, geom) {
	var props = {}
	if(geom.type === 'wkt') {
		head.forEach( (d,i) => {
			if(d !== geom.wkt) { props[d] = row[i] }
		})
		return props
	} else if(geom.type === 'll') {
		head.forEach( (d,i) => {
			if(d !== geom.lat && d !== geom.lng) { props[d] = row[i] }
		})
		return props
	}
}

function getGeom(head, row, geom) {
	if(geom.type === 'wkt') {
		var geo = getCol(geom.wkt, head, row)
		if(geo) {
			return wkt(geo)
		} else { return null }
	} else if(geom.type === 'll') {
		var lng = getCol(geom.lng, head, row)
		var lat = getCol(geom.lat, head, row)
		if(lng && lat) {
			return {
				type: 'Point',
				coordinates: [+lng, +lat]
			}
		} else { return null }
	}
}

function getCol(n, head, row) {
	var index = null
	head.forEach( (d, i) => {
		if(n === d) { index = i }
	})
	return row[index]
}

function getFeat(props, geom) {
	return {
		type: 'Feature',
		properties: props,
		geometry: geom
	}
}
