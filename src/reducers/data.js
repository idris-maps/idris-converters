var defaultState = {} 

export default function reducer(state=defaultState, action) {
	var type = action.type
	if(type === 'RESET') {
		return {}
	} else if(type === 'GOT_GEOJSON') {
		return {...state, type: 'geojson', data: action.payload }
	} else if(type === 'GOT_CSV') {
		return {...state, type: 'csv', data: action.payload }
	} else if(type === 'GOT_GPX_POINTS') {
		return {...state, type: 'gpx', data: action.payload }
	} else if(type === 'CSV_HEAD_ROWS') {
		return {...state, head: action.payload.head, rows: action.payload.rows }
	} else if(type === 'CSV_NO_HEAD') {
		return {...state, headIndex: 0, head: [] }
	} else if(type === 'CSV_HEAD_COL_NAME') {
		var h = state.head
		h.push(action.payload.name)
		return {...state, headIndex: action.payload.headIndex, head: h }
	} else if(type === 'CSV_GEOM_LL') {
		return {...state, geom: { type: 'll', lat: action.payload.lat, lng: action.payload.lng } }
	} else if(type === 'CSV_GEOM_WKT') {
		return {...state, geom: { type: 'wkt', wkt: action.payload.wkt } }
	} else {
		return state
	}
}
