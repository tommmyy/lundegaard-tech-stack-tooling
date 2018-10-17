const UglifyWebpackPlugin = require("uglifyjs-webpack-plugin");

const minifyJavaScript = () => ({
	optimization: {
		minimizer: [new UglifyWebpackPlugin({ sourceMap: true })],
	},
});

module.exports = {
	minifyJavaScript,
};
