import React, { Component } from 'react'
import { connect } from 'react-redux'
import dropAction from '../actions/dropFile'
import handle from './drop-zone/handlers'

class DropZone extends Component {
	onDrop(e, dispatch) { 
		handle.onDrop(e, function(file) {
			dispatch(dropAction(file))
		}) 
	}
	onDragover(e) { handle.onDragover(e) }
	onDragend(e) { handle.onDragend(e) }
	render() {
		return (<div>
			<button onClick={ (e) => console.log(e) }>Test</button>
			<div id="drop-zone"
				onDrop={ (e) => this.onDrop(e, this.props.dispatch) }
				onDragOver={ (e) => this.onDragover(e) }
				onDragEnd={ (e) => this.onDragend(e) }>
				<div>Drop a file here</div>
			</div>
		</div>)
	}
}

export default DropZone
