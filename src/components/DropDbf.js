import React, { Component } from 'react'
import { connect } from 'react-redux'
import dropAction from '../actions/dropFile'
import handle from './drop-zone/handlers'
import DropZone from './DropZone'

class DropDbf extends Component {
	render() {
		return (<div>
			<p className="info">Now the associated DBF file:</p>
			<p><b>{ this.props.name }.dbf</b></p>
			<DropZone dispatch={ this.props.dispatch } />
		</div>)
	}
}

export default DropDbf

