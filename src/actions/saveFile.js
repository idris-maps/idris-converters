var save = require('./save-file/save-as')

module.exports = function(data) {
	return function(dispatch) {
		dispatch({ type: 'SAVING_FILE' })
		if(data.to === 'sql' && data.type === 'geojson') {
			require.ensure(['./save-file/to-sql'], function(require) {
				var toSql = require('./save-file/to-sql')
				toSql(data.data, function(string) {
					save.sql('from-geojson.sql', string)
				})
			})
		}
	}
}
