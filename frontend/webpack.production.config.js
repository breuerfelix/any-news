const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// entry file - starting point for the app
	entry: [
		'@babel/polyfill',
		'./'
	] ,

	mode: 'production',
	devtool: 'none',

	resolve: {
		extensions: [ '.js', '.jsx' ],
		modules: [ 'node_modules', 'frontend' ]
	},

	performance: {
		hints: false
	},

	// where to dump the output of a production build
	output: {
		path: path.join(__dirname, 'public'),
		publicPath: '/',
		filename: 'bundle.js'
	},

	module: {
		rules: [
			{
				test: /\.jsx?/i,
				loader: 'babel-loader',
				options: {
					presets: [
						'@babel/env'
					],
					plugins: [
						[ '@babel/plugin-proposal-decorators' , { legacy: true } ],
						'@babel/plugin-proposal-class-properties'
					]
				}
			},
			{
				test: /\.css$/,
				use: [ 'style-loader', { loader: 'css-loader', options: { importLoaders: 1 } }, 'postcss-loader' ]
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'any-news',
			template: path.join(__dirname, '/index.html')
		})
	]
};
