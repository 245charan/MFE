const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFedarationIndex = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
	mode: 'development',
	devServer: {
		port: 8081,
	},
	plugins: [
		new ModuleFedarationIndex({
			name: 'products',
			filename: 'remoteEntry.js',
			exposes: {
				'./ProductsIndex': './src/bootstrap ',
			},
			shared: ['faker']
		}),
		new HTMLWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
