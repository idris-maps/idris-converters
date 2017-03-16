exports.gotHead = function(r) {
	return function(dispatch) {
		if(r.firstIsHead) {
			dispatch({type: 'CSV_HEAD_ROWS', payload: separateHead(r.data) })
		}
	}
}

exports.gotCol = function(r) {
	return function(dispatch) {
		if(r.headIndex === r.data[0].length) {
			var h = r.head
			h.push(r.name)
			dispatch({ type: 'CSV_HEAD_ROWS', payload: { head: h, rows: r.data } })
		} else {
			dispatch({ type: 'CSV_HEAD_COL_NAME', payload: r })
		}
	}
}

exports.gotGeo = function(r) {
	return function(dispatch) {
		if(r.type === 'll') {
			dispatch({ type: 'CSV_GEOM_LL', payload: r })
		} else if(r.type === 'wkt') {
			dispatch({ type: 'CSV_GEOM_WKT', payload: r })
		}
	}
}

function separateHead(data) {
	var r = { 
		head: data[0], 
		rows: []
	}
	data.forEach(function(d,i) {
		if(i !== 0) { r.rows.push(d) }
	})
	return r
}
