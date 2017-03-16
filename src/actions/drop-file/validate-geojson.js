var GJV = require('geojson-validation')

module.exports = function(json) {
	return GJV.valid(json) 
}
