const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	// entry file - starting point for the app
	entry: [
		'@babel/polyfill',
		'./'
	] ,

	mode: 'development',
	devtool: 'cheap-module-eval-source-map',

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
				use: [ 'style-loader', 'css-loader' ]
			}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'any-news',
			template: path.join(__dirname, '/index.html')
		}),
		new webpack.HotModuleReplacementPlugin(),
	],

	devServer: {
		// serve up any static files from src/
		contentBase: path.join(__dirname),
		hot: true,
		inline: true,
		progress: true,

		proxy: {
			'/api': 'http://localhost:3000'
		},

		// enable gzip compression:
		compress: true,

		// enable pushState() routing, as used by preact-router et al:
		historyApiFallback: true
	}
};
