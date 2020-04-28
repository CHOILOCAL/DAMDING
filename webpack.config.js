var webpack = require('webpack');
var path = require('path');

module.exports = {


  

    entry: ['./src/index.js',
           './src/css/style.css'
    ],
    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: 4000,
        contentBase: __dirname + '/public/'
    },

    // require('path')
    resolve: {
        root: path.resolve('./src')
    },

    module: {
            loaders: [
                {
                    test: /\.css$/,
                    loader: 'style!css-loader',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015', 'react']
                    }
                }
            ]
        },

        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
};