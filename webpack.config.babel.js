import path from 'path';
import HtmlWebpackPlugin from 'webpack-html-plugin';
import webpack from 'webpack';
import filterUnset from './tools/filterUnset';

export default ({dev, prod}) => filterUnset({
    entry: [
        dev && 'react-hot-loader/patch',
        'babel-polyfill',
        './src/',
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true,
        }),
        new webpack.NoErrorsPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: ['es2015', 'react'],
                    modules: false,
                },
            },
            {
                test: /\.less$/,
                use: [
                    {loader: 'style-loader'},
                    {loader: 'css-loader'},
                    {loader: 'less-loader'},
                ],
            },
        ],
    },
});
