const path = require("node:path")
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin")



module.exports = {
    context: path.resolve(__dirname,"./src"),
    resolve: {
        extensions: [".js",".ts"]
    },
    entry: {
        app: "./index.ts"
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
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource'
            },
           {
            test: /\.html$/,
            use: ['html-loader']
           }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html", // nombre del fichero en carpeta dist
            template: "./index.html", // nombre de fichero que se usa como plantilla
            scriptLoading: "blocking", // compatibilidad con navegadores antiguos
            hash: true

        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        })
    ],
    stats: "errors-only",
    devServer: {
        port: 8082
    }
};