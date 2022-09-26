const path = require('path');
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		compress: true,
		hot: true,
		port: 3000,
		open: true,
		static: path.resolve(__dirname, 'dist'),
	},
});
