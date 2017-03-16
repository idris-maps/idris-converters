module.exports = function(pts) {
	var feats = pts.map(function(d) {
		var p = { time: d.time }
		if(d.ele) { p.ele = d.ele }
		return {
			type: 'Feature',
			properties: p,
			geometry: {
				type: 'Point',
				coordinates: [d.lon, d.lat]
			}
		}
	})
	return {
		type: 'FeatureCollection',
		features: feats
	}
}
