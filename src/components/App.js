import React, { Component } from 'react'
import { connect } from 'react-redux'

import DropZone from './DropZone'
import SaveSql from './SaveSql'

class App extends Component {
	render() {
		if(this.props.page.show === 'index') {
			return (<DropZone dispatch={ this.props.dispatch } />)
		} else if(this.props.page.show === 'geojson') {
			return (<SaveSql 
				data={ this.props.data } 
				dispatch={ this.props.dispatch }
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
