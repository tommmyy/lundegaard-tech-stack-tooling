const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	entry: {
		app: './src/index.js'
	},
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist'
	},
	plugins: [
		new CleanWebpackPlugin(['lib']),
		// new HtmlWebpackPlugin({
		// 	title: 'Development',
		// 	template: 'src/assets/index.html'
		// })
	],
	output: {
		filename: '[name].bundle.js',
		publicPath: '/',
		path: path.resolve(__dirname, 'lib')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	}
};
