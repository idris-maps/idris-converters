import React, { Component } from 'react'
import { connect } from 'react-redux'


class About extends Component {
	resetBtn(dispatch) {
		return (<button onClick={ () => dispatch({ type: 'RESET' }) }>OK</button>)
	}
	render() {
		return (<div>
			<p><b>Idris converter</b></p>
			<br/><br/>
			<p className="left">Converts these files to GeoJSON:</p>
			<ul>
				<li>Shapefile (.shp)</li>
				<li>GPS Exchange Format (.gpx)</li>
				<li>CSV with latitude/longitude</li>
				<li>CSV with WellKnownText</li>
			</ul>
			<br/>
			<p className="left">As well as GeoJSON files to SQL scripts.</p>
			<br/>
			<p className="justify">All conversions happen in your browser. Your files are not being uploaded to a remote server. The good news is that your data does not travel around the internet. The bad news is that converting big files may be beyond your browser's capacity.</p>
			<br/>
			{ this.resetBtn(this.props.dispatch) }
		</div>)
  }
}

export default About
