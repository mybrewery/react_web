var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

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
			loader: [
				"style-loader",
				"css-loader",
				"sass-loader"
			]
			//loader: ExtractTextPlugin.extract("css-loader!sass-loader")
		}]
	},
	plugins : [
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin("styles/main.css", {
			allChunks : true
		})
	],
	resolve : {
		extensions: ["*", ".js", ".jsx"]
	} 
}