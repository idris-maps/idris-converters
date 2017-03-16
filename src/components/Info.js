import React, { Component } from 'react'
import { connect } from 'react-redux'


class Info extends Component {
	resetBtn(reset, dispatch) {
		if(reset) {
			return (<button onClick={ () => dispatch({ type: 'RESET' }) }>
				Try with another file
			</button>)
		} else {
			return null
		}
	}
	render() {
		return (<div>
			<p className="info">{ this.props.msg }</p>
			{ this.resetBtn(this.props.reset, this.props.dispatch) }
		</div>)
  }
}

export default Info
