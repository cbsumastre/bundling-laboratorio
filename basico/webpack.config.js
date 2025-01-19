const path = require("node:path")
const HtmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    entry: ["./src/index.js"],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html", // nombre del fichero en carpeta dist
            template: "./src/index.html", // nombre de fichero que se usa como plantilla
            scriptLoading: "blocking" // compatibilidad con navegadores antiguos
        })
    ],
    devServer: {
        static: path.join(__dirname, "./src")
    }
};