var path = require('path');

var config = {
	entry: [path.resolve(__dirname, 'src/main.jsx')],
	output: {
		path: path.resolve(__dirname, 'src'),
		filename: 'main.js'
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/,
				loaders: ['babel']
			}
		]
	}
};

module.exports = config;