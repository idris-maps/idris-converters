function read(file, callback) {
	var reader = new FileReader()
	reader.onload = function() {
		callback(reader.result)
	}
	reader.readAsText(file)
}

exports.json = function(file, callback) {
	read(file, function(content) {
		var json = JSON.parse(content)
		require.ensure(['./validate-geojson'], function(require) {
			var validateGeojson = require('./validate-geojson')
			if(validateGeojson(json)) {
				callback(false, json)
			} else {
				callback(true)
			}
		})
	})
}

exports.csv = function(file, callback) {
	read(file, function(content) {
		require.ensure(['./parse-csv'], function(require) {
			var parseCsv = require('./parse-csv')
			callback(parseCsv(content))
		})
	})
}

exports.gpx = function(file, callback) {
	read(file, function(content) {
		require.ensure(['./parse-xml'], function(require) {
			var parseGpx = require('./parse-xml')
			parseGpx(content, function(err, points) {
				callback(err, points)
			})
		})
	})
}
