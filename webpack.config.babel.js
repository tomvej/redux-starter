import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import sass from 'sass';

const array = (...target) => target.filter(Boolean);

export default ((config) => ({devserver}, {mode}) => config(devserver, mode === 'development'))(
    (devServer, dev) => ({
        entry: [
            '@babel/polyfill',
            './src',
        ],
        output: {
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
            filename: devServer ? '[name].js' : '[name].[contenthash].js',
        },
        optimization: {
            splitChunks: false,
            minimizer: [new UglifyJsPlugin({
                exclude: /node_modules/,
                cache: true,
                parallel: true,
                uglifyOptions: {
                    mangle: true,
                    compress: true,
                    output: {
                        comments: false,
                    },
                },
            })],
        },
        devtool: dev ? 'cheap-module-source-map' : false,
        resolve: {
            modules: ['src', 'node_modules'],
        },
        devServer: {
            hot: true,
            inline: true,
        },
        plugins: array(
            new HtmlWebpackPlugin({
                template: 'src/index.html',
                inject: true,
            }),
            devServer && new webpack.HotModuleReplacementPlugin(),
            new CircularDependencyPlugin({
                exclude: /node_modules/,
                failOnError: true,
            }),
            !devServer && new MiniCssExtractPlugin({
                filename: '[name].[contenthash].css',
            }),
        ),
        module: {
            rules: [{
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                },
                exclude: /node_modules/,
            }, {
                test: /\.(css|scss)$/,
                use: array(
                    devServer ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                            minimize: true,
                            sourceMap: true,
                            modules: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]',
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                            implementation: sass,
                        },
                    },
                ),
            }],
        },
    }),
);
