const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '写代码啦',
            template: 'src/assets/index.html',
        }),
    ],
    module: {
        rules: [{
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.styl$/,
                loader: ["style-loader", "css-loader", 'stylus-loader'],
            },
            {
                test: /\.less$/,
                loader: ["style-loader", "css-loader", 'less-loader'],
            },
            {
                test: /\.scss$ /i,
                use: [
                    "style-loader",
                    "css-loader",
                    // "sass-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require('dart-sass')
                        }
                    },
                ],
            },
        ],
    },
};