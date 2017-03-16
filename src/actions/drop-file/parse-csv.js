var Papa = require('papaparse')

module.exports = function(csv) {
	return Papa.parse(csv)
}
