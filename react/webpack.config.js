const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

module.exports = {
    mode: 'development',
    entry: resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:
                './public/index.html',
        }),
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
                        presets: ['@babel/preset-react', ['@babel/preset-env', { "targets": "defaults" }]],
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
        historyApiFallback: true,
        open: true
    }
}