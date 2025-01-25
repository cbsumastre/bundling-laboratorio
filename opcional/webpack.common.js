const path = require("node:path");
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')


module.exports = {
    context: path.resolve(__dirname, "./src"),
    resolve: {
        extensions: [".js", ".ts", ".tsx"]
    },
    entry: {
        app: "./index.tsx"
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, "dist")
    },
    module: {
        rules: [
            {
                test: /\.tsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            filename: 'index.html', // nombre del fichero en carpeta dist
            template: 'index.html', //nombre de fichero que se usa como plantilla
            scriptLoading: 'blocking', // compatibilidad con navegadores antiguos
        }),
        new CleanWebpackPlugin(),
    ]
};