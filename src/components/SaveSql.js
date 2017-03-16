import React, { Component } from 'react'
import { connect } from 'react-redux'
import saveAction from '../actions/saveFile'


class SaveSql extends Component {
	saveSql(data, dispatch) {
		data.to = 'sql'
		dispatch(saveAction(data))
	}
	render() {
		return (<div>
			<button onClick={ () => this.saveSql(this.props.data, this.props.dispatch) }>
				Download SQL script
			</button>
			<button onClick={ () => this.props.dispatch({ type: 'RESET' }) }>
				Convert another file
			</button>
		</div>)
  }
}

export default SaveSql
