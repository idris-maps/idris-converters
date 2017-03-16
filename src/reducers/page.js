var defaultState = {
	show: 'index'
} 

export default function reducer(state=defaultState, action) {
	var type = action.type
	if(type === 'GOT_FILE') {
		return { show: 'info', msg: 'Reading file...', reset: false }
	} else if(type === 'INVALID_GEOJSON') {
		return { show: 'info', msg: 'This is not a valid GeoJSON file.', reset: true }
	} else if(type === 'GOT_GEOJSON') {
		return { show: 'geojson' }
	} else if(type === 'GOT_CSV') {
		return { show: 'csv' }
	} else if(type === 'UNKNOWN_FILE') {
		return { show: 'info', msg: 'Could not convert this file.', reset: true }
	} else if(type === 'GPX_ERROR') {
		return { show: 'info', msg: 'Could not read the GPX file.', reset: true }
	} else if(type === 'GOT_GPX_POINTS') {
		return {...state, show: 'gpx' }
	} else if(type === 'RESET') {
		return {...state, show: 'index' }
	} else {
		return state
	}
}
