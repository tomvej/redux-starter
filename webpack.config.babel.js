import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'mini-css-extract-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import webpack from 'webpack';

/** removes falsy items from array */
const array = (...target) => target.filter((item) => item);

const createStyleLoader = (dev, ...loaders) => [dev ? 'style-loader' : ExtractTextPlugin.loader].concat(loaders);

const wrapConfig = (config) => (env, {mode}) => config(mode === 'development');

export default wrapConfig((dev) => ({
    entry: [
        'babel-polyfill',
        './src/',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: dev ? '[name].js' : '[name].[chunkhash].js',
    },
    plugins: array(
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true,
        }),
        dev && new webpack.HotModuleReplacementPlugin(),
        !dev && new ExtractTextPlugin({filename: 'style.[chunkhash].css'}),
        new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: true,
        }),
    ),
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        ['env', {modules: false}],
                        'stage-1',
                        'react',
                    ],
                    plugins: ['react-hot-loader/babel'],
                    cacheDirectory: true,
                },
            },
            {
                test: /\.(css|less)$/,
                include: /node_modules/,
                loader: createStyleLoader(dev, 'css-loader', 'less-loader'),
            },
            {
                test: /index.less/,
                include: /src/,
                loader: createStyleLoader(dev, 'css-loader', 'less-loader'),
            },
            {
                test: /\.(css|less)$/,
                include: /src/,
                exclude: /index.less/,
                loader: createStyleLoader(dev, {
                    loader: 'css-loader',
                    query: {
                        modules: true,
                        localIdentName: '[name]__[local]__[hash:base64:5]',
                    },
                }, 'less-loader'),
            },
        ],
    },
    optimization: {
        noEmitOnErrors: true,
    },
}));
