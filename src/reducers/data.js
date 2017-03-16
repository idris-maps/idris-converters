var defaultState = {} 

export default function reducer(state=defaultState, action) {
	var type = action.type
	if(type === 'GOT_GEOJSON') {
		return {...state, type: 'geojson', data: action.payload }
	} else if(type === 'GOT_CSV') {
		return {...state, type: 'csv', data: action.payload }
	} else if(type === 'GOT_GPX_POINTS') {
		return {...state, type: 'gpx', data: action.payload }
	} else {
		return state
	}
}
