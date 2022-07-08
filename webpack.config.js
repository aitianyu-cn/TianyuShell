/**@format */

const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MineCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const htmlSetting = require("./config/html_setting.json");
const env = require("./config/env.json");

const modules = require("./tools/webpack/modules");
const devServer = require("./tools/webpack/devServer");

const pluginsGenerator = function () {
    const plugins = [];

    if (htmlSetting.autoClean) plugins.push(new CleanWebpackPlugin());

    const htmlDefs = htmlSetting.htmls;
    if (htmlDefs) {
        const htmls = Object.keys(htmlDefs);
        for (const html of htmls) {
            const htmlPlugin = new HtmlWebpackPlugin({
                title: htmlDefs[html].title || html,
                template: htmlDefs[html].template || "",
                filename: htmlDefs[html].filename || `${html}.html`,
                chunks: htmlDefs[html].chunks || [],
            });

            plugins.push(htmlPlugin);
        }
    }

    const mineCss = htmlSetting.mineCss;
    if (mineCss) {
        plugins.push(new MineCssExtractPlugin(mineCss));
    }

    return plugins;
};

module.exports = {
    entry: {
        main: "./dty/core/home/index.ts",
        error: "./dty/core/error/error.ts",
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
    plugins: pluginsGenerator(),
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
    devServer: devServer.generator({ dir: __dirname, port: 3000 }),
};
