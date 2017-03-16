module.exports = function(pts) {
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
