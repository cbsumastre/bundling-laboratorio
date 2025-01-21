const path = require("node:path");
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')


module.exports = {
    context: path.resolve(__dirname, "./src"),
    resolve: {
        extensions: [".js", ".ts"]
    },
    entry: {
        app: "./index.js"
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html', // nombre del fichero en carpeta dist
            template: 'index.html', //nombre de fichero que se usa como plantilla
            scriptLoading: 'blocking', // compatibilidad con navegadores antiguos
            hash: true
        }),
        new CleanWebpackPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }),
    ],
    devServer: {
        static: path.join(__dirname, "./src"),
        port: 8081
    }
};