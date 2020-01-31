var path = require("path");

module.exports = {
    mode: "production",
    entry: "./src/index.js",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    output: {
        path: path.resolve("dist"),
        libraryTarget: "commonjs"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.ts(x?)$/,
                exclude: /(node_modules)/,
                use: "ts-loader"
            }
        ]
    },
    externals: {
        react: "react",
        "userbase-js": "userbase-js"
    }
};
