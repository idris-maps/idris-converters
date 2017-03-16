var defaultState = {
	show: 'index'
} 

export default function reducer(state=defaultState, action) {
	var type = action.type
	if(type === 'GOT_FILE') {
		return {...state, show: 'file-dropped' }
	} else if(type === 'INVALID_GEOJSON') {
		return {...state, show: 'invalid-geojson'}
	} else if(type === 'GOT_GEOJSON') {
		return {...state, show: 'geojson' }
	} else if(type === 'GOT_CSV') {
		return {...state, show: 'csv' }
	} else if(type === 'UNKNOWN_FILE') {
		return {...state, show: 'unknown-file' }
	} else if(type === 'GPX_ERROR') {
		return {...state, show: 'gpx-error' }
	} else if(type === 'GOT_GPX_POINTS') {
		return {...state, show: 'gpx' }
	} else {
		return state
	}
}
