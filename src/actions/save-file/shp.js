var shapefile = require('shapefile')

module.exports = function(data, callback) {
	var c = {type: 'FeatureCollection', features: [] }
	shapefile.open(data.shpData, data.dbfData)
	.then(source => source.read()
		.then(function log(result) {
			if(result.done) { callback(null, c); return }
			c.features.push(result.value)
			return source.read().then(log)
		}))
		.catch(error => { 
			console.error(error.stack) 
			callback(error)
		})
}
