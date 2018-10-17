const merge = require('webpack-merge');
const { setupDevServer } = require('./parts/devServer');

module.exports = merge([
	{
		devtool: 'source-map',
	},
	setupDevServer({ port: 8800 }),
]);
