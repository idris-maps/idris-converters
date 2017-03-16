import React, { Component } from 'react'
import { connect } from 'react-redux'

import DropZone from './DropZone'
import SaveSql from './SaveSql'
import Info from './Info'
import SaveGpxAsJson from './SaveGpxAsJson'
import CsvHead from './CsvHead'
import CsvDefineHead from './CsvDefineHead'
import CsvGeom from './CsvGeom'
import SaveCsvAsJson from './SaveCsvAsJson'

class App extends Component {
	render() {
		var show = this.props.page.show
		if(show === 'index') {
			return (<DropZone dispatch={ this.props.dispatch } />)
		} else if(show === 'geojson') {
			return (<SaveSql 
				data={ this.props.data } 
				dispatch={ this.props.dispatch }
			/>)
		} else if(show === 'info') {
			return(<Info
				dispatch={ this.props.dispatch }
				msg={ this.props.page.msg }
				reset={ this.props.page.reset }
			/>)
		} else if(show === 'gpx') {
			return(<SaveGpxAsJson
				dispatch={ this.props.dispatch }
				data={ this.props.data }
			/>)
		} else if(show === 'csv-head') {
			return(<CsvHead
				dispatch={ this.props.dispatch }
				data={ this.props.data }
			/>)
		} else if(show === 'csv-define-head') {
			return(<CsvDefineHead
				dispatch={ this.props.dispatch }
				data={ this.props.data }
			/>)
		} else if(show === 'csv-geom') {
			return (<CsvGeom 
				dispatch={ this.props.dispatch }
				data={ this.props.data }
			/>)
		} else if(show === 'csv-ready') {
			return (<SaveCsvAsJson 
				dispatch={ this.props.dispatch }
				data={ this.props.data }
			/>)
		} else {
			console.log('App', this)
			return (<p>Page: { this.props.page.show }</p>)
		}
  }
}

App = connect((store) => {
  return store
})(App)

export default App
