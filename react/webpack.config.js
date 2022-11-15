const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { resolve } = require('path');

let config = {
    mode: 'development',
    devtool: "source-map",
    entry: resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'static/index.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css', '.scss'],
        modules: [resolve(__dirname), "node_modules"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:
                './public/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: './public/static',
                    to: './static'
                }
            ]
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'static/index.css',
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
                        presets: [["@babel/preset-react", { "runtime": "automatic" }], ['@babel/preset-env', { "targets": "defaults" }]],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
            {
                test: /\.(svg|gif|png|eot|woff2|woff|ttf)$/,
                use: [
                    'url-loader',
                ],
            },
        ],
    },
    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
    },
    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true
    }
};

let cssConfig = {
    test: /\.(sa|sc|c)ss$/,
    use: [
        'css-loader',
        'sass-loader'
    ]
};

module.exports = (env, argv) => {

    if (argv.mode === 'production') {
        config.output.publicPath = './';
        cssConfig.use.unshift(MiniCssExtractPlugin.loader);
        config.module.rules.push(cssConfig);

        return config;
    }

    config.output.publicPath = 'auto';
    cssConfig.use.unshift('style-loader');
    config.module.rules.push(cssConfig);

    return config;
};