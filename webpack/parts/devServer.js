const setupDevServer = ({ port, host } = {}) => ({
	devServer: {
		stats: 'errors-only',
		port,
		host,
		// contentBase: './dist',
	},
});

module.exports = {
	setupDevServer,
};
