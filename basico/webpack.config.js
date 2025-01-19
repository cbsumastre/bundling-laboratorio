const path = require("node:path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")



module.exports = {
    entry: {
        app: "./src/index.js"
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
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html", // nombre del fichero en carpeta dist
            template: "./src/index.html", // nombre de fichero que se usa como plantilla
            scriptLoading: "blocking", // compatibilidad con navegadores antiguos
            hash: true

        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    devServer: {
        static: path.join(__dirname, "./src"),
        port: 8082
    }
};