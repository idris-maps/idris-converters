var read = require('./drop-file/read')

module.exports = function(file) {
	return function(dispatch) {
		dispatch({ type: 'GOT_FILE' })
		var ext = checkType(file)
		console.log('action dropFile ext', ext)
		if(ext) {
			if(ext === 'json') {
				read.json(file, function(err, json) {
					if(err) { dispatch({ type: 'INVALID_GEOJSON' }) }
					else { dispatch({ type: 'GOT_GEOJSON', payload: json }) }
				})
			} else if(ext === 'csv') {
				read.csv(file, function(csv) {
					dispatch({type: 'GOT_CSV', payload: csv})
				})
			} else if(ext === 'gpx') {
				read.gpx(file, function(err, points) {
					if(err) { dispatch({ type: 'GPX_ERROR', payload: err }) }
					else { dispatch({ type: 'GOT_GPX_POINTS', payload: points }) }
				})
			} else { console.log('unknown ext:', ext) }
		} else {
			console.log('action dropFile unknown', ext)
			dispatch({ type: 'UNKNOWN FILE' })
		}
	}
}

function checkType(file) {
	var spl = file.name.split('.')
	var ext = spl[spl.length - 1]
	if(ext === 'csv' || ext === 'tsv') {
		return 'csv'
	} else if(ext === 'gpx') {
		return 'gpx'
	} else if(ext === 'json' || ext === 'geojson') {
		return 'json'
	} else {
		return null
	}
}
