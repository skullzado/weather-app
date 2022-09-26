const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: './js/bundle.js',
		clean: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Project - Weather App',
			template: './src/template.html',
			favicon: './src/assets/favicon.ico',
		}),
		new MiniCssExtractPlugin({
			linkType: 'text/css',
			filename: './css/main.css',
		}),
		new ESLintPlugin(),
	],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				type: 'asset/resource',
				test: /\.(png|jpe?g|gif|ico)$/i,
				generator: {
					filename: 'media/[name][hash][ext]',
				},
			},
		],
	},
};
