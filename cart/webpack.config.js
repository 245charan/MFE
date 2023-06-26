const HTMLWebpackPlugin = require('html-webpack-plugin');
const ModuleFedarationIndex = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
	mode: 'development',
	devServer: {
		port: 8083,
	},
	plugins: [
		new ModuleFedarationIndex({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/bootstrap'
            },
			shared: ['faker']
        }),
		new HTMLWebpackPlugin({
			template: './public/index.html',
		}),
	],
};
