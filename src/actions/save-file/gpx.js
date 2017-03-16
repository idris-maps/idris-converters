exports.points = function(pts) {
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

exports.line = function(pts) {
	var coords = pts.map(function(d) {
		return [d.lon, d.lat]
	})
	var d = new Date(pts[0].time)
	var date = d.toDateString()
	return {
		type: 'FeatureCollection',
		features: [
			{
				type: 'Feature',
				properties: { date: date },
				geometry: {
					type: 'LineString',
					coordinates: coords
				}
			}
		]
	}
}

