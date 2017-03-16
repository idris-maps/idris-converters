import React, { Component } from 'react'
import { connect } from 'react-redux'
import csvAction from '../actions/csvMenu'

class CsvHead extends Component {
	yes(data, dispatch) {
		var r = { data: data, firstIsHead: true }
		dispatch(csvAction.gotHead(r))
	}
	firstLine(line) {
		return line.map(function(d,i) {
			return (<tr key={ i }><td>{ d }</td></tr>)
		})
	}
	render() {
		return (<div>
			<p className="info">This is the first line:</p>
			<table><tbody>
			{ this.firstLine(this.props.data.data.data[0]) }
			</tbody></table>
			<p className="info">Are these the names of the columns?</p>
			<button onClick={ () => this.yes(this.props.data.data.data, this.props.dispatch) }>
				Yes
			</button>
			<button onClick={ () => this.props.dispatch({ type: 'CSV_NO_HEAD' }) }>
				No
			</button>
		</div>)
  }
}

export default CsvHead
