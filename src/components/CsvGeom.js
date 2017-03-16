import React, { Component } from 'react'
import { connect } from 'react-redux'
import csvAction from '../actions/csvMenu'

class CsvGeom extends Component {
	constructor() {
		super()
		this.state = {}
	}
	opts(head) {
		return head.map( (d,i) => {
			return <option key={ i } value={ d }>{ d }</option>
		})
	}
	change(type, val, ctx) {
		if(val) {
			var o = {}
			o[type] = val
			ctx.setState(o)
		} 
	}
	click(type, ctx) {
		if(type === 'll' && ctx.state.lat && ctx.state.lng) {
			var r = {
			 type: 'll', lat: ctx.state.lat, lng: ctx.state.lng
			}
			ctx.props.dispatch(csvAction.gotGeo(r))
		} else if(type === 'wkt' && ctx.state.wkt) {
			var r = {
			 type: 'wkt', wkt: ctx.state.wkt
			}
			ctx.props.dispatch(csvAction.gotGeo(r))
		}
	}
	render() {
		var ctx = this
		return (<div>
			<p className="info">How is geometry represented?</p>
			<p>As latitude / longitude</p>
			<p>Latitude</p>
			<select onChange={ (e) => this.change('lat', e.target.value, ctx) }>
				<option>-- Choose column --</option>
				{ this.opts(this.props.data.head) }
			</select>
			<p>Longitude</p>
			<select onChange={ (e) => this.change('lng', e.target.value, ctx) }>
				<option>-- Choose column --</option>
				{ this.opts(this.props.data.head) }
			</select>
			<button onClick={ () => this.click('ll', ctx) }>OK</button> 
			<p>As Well Known Text</p>
			<select onChange={ (e) => this.change('wkt', e.target.value, this) }>
				<option>-- Choose column --</option>
				{ this.opts(this.props.data.head) }
			</select>
			<button onClick={ () => this.click('wkt', ctx) }>OK</button> 
		</div>)
  }
}

export default CsvGeom
