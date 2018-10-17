const path = require('path');

const p = (x) => path.join(__dirname, "..", x);

module.exports = {
	app: p('src/index.js'),
	dist: p('lib'),
};
