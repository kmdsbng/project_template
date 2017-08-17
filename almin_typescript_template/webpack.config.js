const path = require("path");

module.exports = {
    entry: "./ts/src/index.tsx",
    devtool: "source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    output: {
        path: path.join(__dirname, "public", "build"),
        publicPath: "/build/",
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
              test: /\.tsx?$/,
              loader: "ts-loader"
            },
            {
              enforce: "pre",
              test: /\.js$/,
              loader: "source-map-loader"
            }
        ]
    }
};

