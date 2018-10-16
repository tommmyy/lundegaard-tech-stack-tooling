const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, 'dist');
module.exports = {
	entry: './src/index.js',
	output: {
		path: outputPath,
		filename: 'main.bundle.js'
	},
	plugins: [
		new CleanWebpackPlugin([outputPath]),
		new HtmlWebpackPlugin(),
	]
};
