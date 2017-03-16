const webpack = require('webpack')
const path = require('path')

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: './index.jsx',
    output: {
        path: path.resolve(__dirname, 'build', 'assets', 'javascripts'),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test: /.node$/,
                loader: 'node-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            },
            { test: /\.(png|jpg)$/, loader: 'file-loader?name=images/[name].[ext]' }
        ]
    },
    devServer: {
        port: 3000
    }
}
