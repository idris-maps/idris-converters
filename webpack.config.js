var HtmlwebpackPlugin = require('html-webpack-plugin')
var UglifyJsPlugin = require('webpack-uglify-js-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var webpack = require('webpack')

module.exports = {
	entry: './src/main.js',
	output: {
		path: './dist',
		filename: 'idris-converters.js'
	},
	plugins: [
		new HtmlwebpackPlugin({
			title: 'Idris converters',
			descr: 'Convert CSV, GPX and SHP files to GeoJSON and SQL scripts in the browser.',
			keywords: 'Idris, convert, CSV, GPX, SHP, GeoJSON, WKT, GIS, mapping, online tool',
			template: 'src/public/index.html'
		}),
		new CopyWebpackPlugin([
			{from: 'src/public/style.css'},
			{from: 'src/public/img'}
		]),
		new webpack.DefinePlugin({
				'process.env': {
				  NODE_ENV: JSON.stringify('developement')
				}
		}),
		new UglifyJsPlugin({cacheFolder: 'cache'})
	],
 module: {
 	loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [],
        }
      }
		]
	}
}
