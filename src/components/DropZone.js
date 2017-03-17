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
	triggerInput() {
		document.getElementById('inputfile').click()
	}
	onChange(e, dispatch) {
		dispatch(dropAction(e.target.files[0]))
	}
	aboutBtn(show, dispatch, whenClick) {
		if(show) {
			return(<button onClick={ () => whenClick(dispatch) }>About</button>)
		} else {
			return null
		}
	}
	showAbout(dispatch) {
		dispatch({ type: 'ABOUT' })
	}
	render() {
		return (<div>
			<input 
				type="file" 
				name="file" 
				id="inputfile" 
				onChange={ (e) => { this.onChange(e, this.props.dispatch) } }/>
			<button onClick={ () => this.triggerInput() }>Browse filesystem</button>
			<br/><br/>
			<div id="drop-zone"
				onDrop={ (e) => this.onDrop(e, this.props.dispatch) }
				onDragOver={ (e) => this.onDragover(e) }
				onDragEnd={ (e) => this.onDragend(e) }>
				<div id="dz-txt">or drop a file</div>
			</div>
			<br/>
			{ this.aboutBtn(this.props.about, this.props.dispatch, this.showAbout) }
		</div>)
	}
}

export default DropZone
