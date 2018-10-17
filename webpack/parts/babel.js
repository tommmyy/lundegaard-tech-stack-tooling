const loadBabel = ({ include, exclude } = {}) => ({
	module: {
		rules: [
			{
				test: /\.js$/,
				include,
				exclude,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
});

module.exports = {
	loadBabel,
};
