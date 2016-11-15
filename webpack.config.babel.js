import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

/** removes empty items from array */
const array = (target) => target.filter((item) => item);

/** removes empty properties from object */
const object = (target) => Object.keys(target).filter((key) => target[key]).reduce((result, key) => Object.assign({[key]: target[key]}, result), {});

export default ({dev, prod}) => ({
    entry: array([
        dev && 'react-hot-loader/patch',
        'babel-polyfill',
        './src/',
    ]),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    plugins: array([
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true,
        }),
        dev && new webpack.NoErrorsPlugin(),
        prod && new webpack.optimize.UglifyJsPlugin(),
        prod && new webpack.optimize.DedupePlugin(),
    ]),
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
