const merge = require('webpack-merge');

const commonConfig = require('./webpack/webpack.common');
const productionConfig = require('./webpack/webpack.config.prod');
const developmentConfig = require('./webpack/webpack.config.dev');

module.exports = (mode) => {
	process.env.BABEL_ENV = mode;

	return merge(commonConfig, mode === 'production' ? productionConfig : developmentConfig, { mode });
};
