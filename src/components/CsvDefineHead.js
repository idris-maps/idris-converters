import React, { Component } from 'react'
import { connect } from 'react-redux'
import csvAction from '../actions/csvMenu'

class CsvDefineHead extends Component {
	constructor() {
		super()
		this.state = { name: '' }
	}
	line(x, i) {
		return (<tr key={ i }><td>{ x }</td></tr>)
	}
	firstLines(data, index, line) {
		if(data.length < 3) {
			return data.map(function(d, i) {
				return line(d[index], i)
			})
		} else {
			return data.map(function(d, i) {
				if(i < 3) { return line(d[index], i) }
				else { return null }
			})
		}
	}
	change(val) {
		this.setState({ name: val })
	}
	btn(ok) {
		if(this.state.name && this.state.name !== '') {
			if(!isIn(this.state.name, this.props.data.head)) {
				return (<button onClick={ () => ok() }>OK</button>)
			}
		}
	}
	ok() {
		var r = {
			headIndex: this.props.data.headIndex + 1,
			name: this.state.name,
			data: this.props.data.data.data,
			head: this.props.data.head
		}
		this.props.dispatch(csvAction.gotCol(r))
		this.setState({ name: '' })
	}
	render() {
		return (<div>
		<p className="info">Give this column a name</p>
		<input 
			onChange={ (e) => this.change(e.target.value) } 
			value={ this.state.name }/>
		{ this.btn(this.ok.bind(this)) }
		<p className="info">These are the first rows</p>
		<table><tbody>
			{ this.firstLines(this.props.data.data.data, this.props.data.headIndex, this.line) }
		</tbody></table>
		</div>)
  }
}

export default CsvDefineHead

function isIn(val, arr) {
	var r = false
	arr.forEach(function(d) {
		if(d === val) { r = true }
	})
	return r
}
