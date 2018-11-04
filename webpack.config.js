const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

const CSSModuleLoader = {
	loader: 'css-loader',
	options: {
		modules: true,
		importLoaders: 1,
		localIdentName: '[name]_[local]_[hash:base64]',
		sourceMap: true,
		minimize: true,
	},
}

const CSSLoader = {
	loader: 'css-loader',
	options: {
		modules: false,
		sourceMap: true,
		minimize: true,
	},
}

const postCSSLoader = {
	loader: 'postcss-loader',
	options: {
		ident: 'postcss',
		sourceMap: true,
		plugins: () => [
			autoprefixer({
				browsers: [ '>1%', 'last 4 versions', 'Firefox ESR', 'not ie < 9' ],
			}),
		],
	},
}

const htmlPlugin = new HtmlWebPackPlugin({
	template: './src/index.html',
	filename: './index.html',
})

module.exports = {
	entry: './src/index.js',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [ 'babel-loader', 'eslint-loader' ],
			},
			{
				test: /\.scss$/,
				exclude: /\.module\.scss$/,
				use: [ 'style-loader', CSSLoader, postCSSLoader, 'sass-loader' ],
			},
			{
				test: /\.module\.scss$/,
				use: [
					'style-loader',
					CSSModuleLoader,
					postCSSLoader,
					'sass-loader',
				],
			},
		],
	},
	plugins: [ htmlPlugin, new webpack.HotModuleReplacementPlugin() ],
	devServer: {
		contentBase: './dist',
		hot: true,
	},
}
