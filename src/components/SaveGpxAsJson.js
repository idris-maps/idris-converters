import React, { Component } from 'react'
import { connect } from 'react-redux'
import saveAction from '../actions/saveFile'


class SaveGpxAsJson extends Component {
	saveSql(data, dispatch, type) {
		if(type === 'p') { data.as = 'points' }
		else if(type === 'l') { data.as = 'line' }
		data.to = 'json'
		dispatch(saveAction(data))
	}
	render() {
		return (<div>
			<button onClick={ () => this.saveSql(this.props.data, this.props.dispatch, 'p') }>
				Download GeoJSON points
			</button>
			<button onClick={ () => this.saveSql(this.props.data, this.props.dispatch, 'l') }>
				Download GeoJSON line
			</button>
			<button onClick={ () => this.props.dispatch({ type: 'RESET' }) }>
				Convert another file
			</button>
		</div>)
  }
}

export default SaveGpxAsJson
