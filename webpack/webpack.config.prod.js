const merge = require('webpack-merge');

const paths = require('./paths');
const { clean } = require('./parts/clean');
const { minifyJavaScript } = require('./parts/minify');

module.exports = merge([
	clean({ dist: paths.dist }),
	minifyJavaScript(),
]);
