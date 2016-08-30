const path = require("path")
const fs = require("fs")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {

	entry: "./server/server.js",
	target: "node",

	externals: fs.readdirSync("node_modules")
		.reduce(function(acc, mod) {
		  	if (mod === ".bin") {
		  	  	return acc
		  	}
	
		  	acc[mod] = "commonjs " + mod
		  	return acc
		}, {}),

	node: {
 		console: false,
 		global: false,
 		process: false,
 		Buffer: false,
 		__filename: false,
 		__dirname: false,
	},

	output: {
		path: path.join(__dirname),
		filename: "server.main.js",
	},

    module: {
        loaders: [
            {
                test:/\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },{ test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") }
      		// {
      		//   	test: /\.css$/,
      		//   	loaders: [
      		//   	  	'isomorphic-style-loader',
      		//   	  	'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:3]',
      		//   	  	'postcss-loader'
      		//   	]
      		// }
        ]
    },
    plugins: [
        new ExtractTextPlugin("./public/styles.css")
    ]

};