var webpack = require("webpack");

module.exports = {
	entry	: [
		"react-hot-loader/patch",
		"./src/index.js"
	],
	output	: {
		path		: __dirname + "/dist",
		publicPath 	: "/",
		filename	: "bundle.js"
	},
	devServer : {
		contentBase : "./dist",
		hot : true
	},
	module : {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: ["babel-loader"],
		}, {
			test: /\.scss$/,
			loaders: [
				'style-loader',
			 	'css-loader', 
			 	'sass-loader'
			]
		}]
	},
	plugins : [
		new webpack.HotModuleReplacementPlugin()
	],
	resolve : {
		extensions: ["*", ".js", ".jsx"]
	} 
}