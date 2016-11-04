import path from 'path';
import HtmlWebpackPlugin from 'webpack-html-plugin';

export default {
    entry: [
        'react-hot-loader/patch',
        'babel-polyfill',
        './src/',
    ],
    output: {
        path: path.resolve(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true,
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                query: {
                    presets: ['es2015', 'react'],
                },
            },
            {
                test: /\.less$/,
                loader: 'style!css!less',
            },
        ],
    },
};
