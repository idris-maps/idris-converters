var defaultState = {
	show: 'index'
} 

export default function reducer(state=defaultState, action) {
	var type = action.type
	if(type === 'GOT_FILE') {
		return { show: 'info', msg: 'Reading file...', reset: false }
	} else if(type === 'INVALID_GEOJSON') {
		return { show: 'info', msg: 'This is not a valid GeoJSON file.', reset: true }
	} else if(type === 'UNKNOWN_FILE') {
		return { show: 'info', msg: 'Could not convert this file.', reset: true }
	} else if(type === 'GPX_ERROR') {
		return { show: 'info', msg: 'Could not read the GPX file.', reset: true }
	} else if(type === 'GOT_GEOJSON') {
		return { show: 'geojson' }
	} else if(type === 'GOT_GPX_POINTS') {
		return { show: 'gpx' }
	} else if(type === 'GOT_CSV') {
		return { show: 'csv-head' }
	} else if(type === 'CSV_HEAD_ROWS') {
		return { show: 'csv-geom' }
	} else if(type === 'CSV_NO_HEAD') {
		return { show: 'csv-define-head' }
	} else if(type === 'RESET') {
		return { show: 'index' }
	} else if(type === 'CSV_GEOM_LL') {
		return { show: 'csv-ready' }
	} else if(type === 'CSV_GEOM_WKT') {
		return { show: 'csv-ready' }
	} else if(type === 'GOT_SHP') {
		return { show: 'drop-dbf' }
	} else if(type === 'GOT_DBF') {
		return { show: 'shp' }
	} else if(type === 'SHP_ERROR') {
		return { show: 'info', msg: 'Could not convert SHP file', reset: true }
	} else {
		return state
	}
}
