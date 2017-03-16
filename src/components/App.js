import React, { Component } from 'react'
import { connect } from 'react-redux'

import DropZone from './DropZone'
import SaveSql from './SaveSql'
import Info from './Info'

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
