const NODE_ENV = process.env.NODE_ENV;
const webpack = require('webpack');

module.exports = {
    entry: './main.js',
    output: {
        filename: 'build.js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    devtool: 'cheap-module-source-map',
    plugins: []
};

if (NODE_ENV === 'production') {
    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                unsafe: false
            }
        })
    )
};