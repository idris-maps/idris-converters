import React, { Component } from 'react'
import { connect } from 'react-redux'
import saveAction from '../actions/saveFile'


class SaveCsvAsJson extends Component {
	saveCsv(data, dispatch) {
		data.to = 'json'
		dispatch(saveAction(data))
	}
	render() {
		return (<div>
			<button onClick={ () => this.saveCsv(this.props.data, this.props.dispatch) }>
				Download GeoJSON
			</button>
			<button onClick={ () => this.props.dispatch({ type: 'RESET' }) }>
				Convert another file
			</button>
		</div>)
  }
}

export default SaveCsvAsJson
