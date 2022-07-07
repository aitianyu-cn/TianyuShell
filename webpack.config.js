/**@format */

const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MineCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const htmlSetting = require("./config/html_setting.json");
const env = require("./config/env.json");

const modules = require("./tools/webpack/modules");
const devServer = require("./tools/webpack/devServer");

module.exports = {
    entry: {
        main: "./dty/core/home/index.ts",
    },
    output: {
        path: path.resolve(__dirname, "/build"),
        filename: "[name].chunks.[contenthash:6].js",
        chunkFilename: "[name].chunks.[contenthash:8].js",
        environment: {
            arrowFunction: false,
        },
    },
    module: {
        rules: modules.rules,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: htmlSetting.title,
            template: htmlSetting.template,
            chunks: ["main"],
        }),
        new MineCssExtractPlugin({
            filename: "[name].[contenthash:6].css",
            chunkFilename: "[name].[contenthash:8].css",
        }),
    ],
    resolve: {
        extensions: [".ts", ".js", ".css", ".view.json", ".i18n.js"],
        alias: {
            "dty-core": path.resolve(__dirname, "dty"),
            "dty-config": path.resolve(__dirname, "config"),
            "dty-lang": path.resolve(__dirname, "i18n"),
            application: path.resolve(__dirname, "app"),
        },
    },
    mode: env.mode,
    devtool: "source-map",
    watchOptions: {
        poll: 1000,
        aggregateTimeout: 1000,
        ignored: /node_modules/,
    },
    devServer: {
        proxy: devServer.proxy,
    },
};
