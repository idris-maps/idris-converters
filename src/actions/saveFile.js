var save = require('./save-file/save-as')
var gpx = require('./save-file/gpx')
var csv = require('./save-file/csv')
var store = require('../store')
module.exports = function(data) {
	return function(dispatch) {
		dispatch({ type: 'SAVING_FILE' })
		if(data.to === 'sql') {
			require.ensure(['./save-file/to-sql'], function(require) {
				var toSql = require('./save-file/to-sql')
				toSql(data.data, function(string) {
					save.sql('from-geojson.sql', string)
				})
			})
		} else if(data.type === 'gpx') {
			if(data.as === 'points') { 
				save.json('points-from-gpx', gpx.points(data.data))
			} else if(data.as === 'line') {
				save.json('line-from-gpx', gpx.line(data.data))
			}
		} else if(data.type === 'csv') {
			require.ensure(['./save-file/csv'], function(require) {
				var csv = require('./save-file/csv')
				save.json('from-csv', csv(data.head, data.rows, data.geom))
			})
		} else if(data.type === 'shp') {
			require.ensure(['./save-file/shp'], function(require) {
				var shp = require('./save-file/shp')
				shp(data, function(err, col) {
					if(err) { store.dispatch({ type: 'SHP_ERROR' }) }
					save.json('from-shp', col)
				})
			})
		}
	}
}
