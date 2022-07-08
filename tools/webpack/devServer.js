/**@format */

const env = require("../../config/env.json");
const path = require("path");

const proxyData = require("../../config/proxy.json");

const historyApiFallback = {
    rewrites: [
        { from: /^\/$/, to: "/index.html" },
        { form: /./, to: "/error.html#404" },
    ],
};

const devServerStatic = function (dir) {
    const staticSrc = [
        {
            directory: path.join(dir, "public"),
            publicPath: "/public/sources",
        },
    ];

    return staticSrc;
};

module.exports.generator = function getDevServer(option) {
    option = option || {};

    const devHost = option.host || process.env.DEV_SERVER_HOST || "0.0.0.0";
    const devPort = option.port || process.env.DEV_SERVER_PORT || 8080;
    const dir = option.dir || __dirname;

    const config = {
        proxy: proxyData,
        historyApiFallback: historyApiFallback,
        compress: env.mode !== "development",
        hot: env.mode === "development",
        static: devServerStatic(dir),
        host: devHost,
        port: devPort,
    };

    return config;
};
