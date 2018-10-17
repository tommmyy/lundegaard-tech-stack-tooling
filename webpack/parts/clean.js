const CleanWebpackPlugin = require('clean-webpack-plugin');

const clean = ({ dist } = {}) => ({
	plugins: [
		new CleanWebpackPlugin([dist])
	],
});

module.exports = {
	clean,
};
