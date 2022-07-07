/**@format */

const path = require("path");

const MineCssExtractPlugin = require("mini-css-extract-plugin");

module.exports.rules = [
    {
        test: /\.ts$/,
        use: [
            {
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                corejs: "3",
                                useBuiltIns: "usage",
                            },
                        ],
                    ],
                },
            },
            "ts-loader",
        ],
        exclude: /node_modules/,
    },
    {
        test: /\.i18n.js$/,
        use: [
            {
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                corejs: "3",
                                useBuiltIns: "usage",
                            },
                        ],
                    ],
                },
            },
        ],
        exclude: /node_modules/,
    },
    {
        test: /\.view.json$/,
        use: [
            {
                loader: "babel-loader",
                options: {
                    presets: [
                        [
                            "@babel/preset-env",
                            {
                                corejs: "3",
                                useBuiltIns: "usage",
                            },
                        ],
                    ],
                },
            },
            "ts-loader",
            path.resolve(__dirname, "viewLoader.js"),
        ],
        exclude: /node_modules/,
    },
    {
        test: /\.less$/i,
        exclude: /(node_modules|bower_components)/,
        use: [MineCssExtractPlugin.loader, "css-loader", "less-loader"],
    },
    {
        test: /\.css$/i,
        exclude: /(node_modules|bower_components)/,
        use: [MineCssExtractPlugin.loader, "css-loader"],
    },
];
