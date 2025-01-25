const Dotenv = require("dotenv-webpack");
const { merge } = require("webpack-merge")
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const common = require("./webpack.common")

module.exports = merge(common, {
    mode: "production",
    entry: {
        ...this.entry
    },
    output: {
        filename: 'js/[name].[chunkhash].js',
        assetModuleFilename: "images/[hash][ext][query]"
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: {
            cacheGroups: {
                vendor: {
                    chunks: 'all',
                    name: (module) => {
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
                        // npm package names are URL-safe, but some servers don't like @symbols
                        return `vendor/${packageName.replace("@", "")}`;
                    },
                    test: /[\\/]node_modules[\\/]/,
                    enforce: true
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                include: /node_modules/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: "css-loader",
                    options: {
                        modules: {
                            exportLocalsConvention: "camelCase"
                        }
                    }
                }
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                exportLocalsConvention: "camelCase",
                            }
                        }
                    },
                    "sass-loader"
                ]
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css",
            filename: "css/[name].[chunkhash].css",
        }),
        new Dotenv({
            path: "./prod.env"
        })
    ]
});