/**@format */

const path = require("path");

const proxyData = require("../../config/proxy.json");

module.exports.proxy = proxyData;

module.exports.historyApiFallback = {
    rewrites: [
        { from: /^\/$/, to: "/index.html" },
        { form: /./, to: "/error.html#404" },
    ],
};

module.exports.static = function (dir) {
    const staticSrc = [
        {
            directory: path.join(dir, "public"),
            publicPath: "/public/sources",
        },
    ];

    return staticSrc;
};
