const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MineCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const htmlSetting = require("./config/html_setting.json");
const env = require("./config/env.json");

module.exports = {
    entry: {
        main: "./dty/core/index.ts"
    },
    output: {
        path: path.resolve(__dirname, "/build"),
        filename: "[name].chunks.[contenthash:6].js",
        chunkFilename: "[name].chunks.[contenthash:8].js",
        environment: {
            arrowFunction: false,
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            "presets": [
                                [
                                    "@babel/preset-env",
                                    {
                                        "corejs": "3",
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    "ts-loader"
                ],
                exclude: /node_modules/,
            },
            {
                test:/\.less$/i,
                exclude:/(node_modules|bower_components)/,
                use: [
                    MineCssExtractPlugin.loader,
                    'css-loader',
                    'less-loader'
                ]    
            }
        ],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin(
            {
                title: htmlSetting.title,
                template: htmlSetting.template,
                chunks: ["main"]
            }
        ),
        new MineCssExtractPlugin(
            {
                filename: "[name].[contenthash:6].css",
                chunkFilename: "[name].[contenthash:8].css"
            }
        )
    ],
    resolve: {
        extensions: [".ts", ".js"]
    },
    mode: env.mode,
    devtool: "source-map",
    watch: true,
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 1000,
        ignored: /node_modules/,
    },
    devServer: {
        proxy: {
            "/project_docs": {
                target: "http://aitianyu.cn",
                changeOrigin: true,
                secure: false
            }
        }
    }
};
