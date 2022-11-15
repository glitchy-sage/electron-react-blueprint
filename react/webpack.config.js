const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { resolve } = require('path');

module.exports = {
    mode: 'development',
    entry: resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'index.js',
        publicPath: './'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:
                './src/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public' }
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.m?(jsx|js)$/,
                include: resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [["@babel/preset-react", { "runtime": "automatic" }], ['@babel/preset-env', { "targets": "defaults" }]],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ],
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true
    }
}