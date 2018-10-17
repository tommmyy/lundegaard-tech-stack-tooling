const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');

const paths = require('./paths');
const { loadBabel } = require('./parts/babel');

module.exports = merge([
	{
		entry: {
			app: paths.app,
		},

		plugins: [
			new HtmlWebpackPlugin({
				template: 'src/assets/index.html',
			}),
		],
		output: {
			filename: '[name].bundle.js',
			publicPath: '/',
			path: paths.dist,
		},
	},
	loadBabel({ exclude: /node_modules/ }),
]);
