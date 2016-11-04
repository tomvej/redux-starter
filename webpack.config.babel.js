import path from 'path';

export default {
    entry: [
        'react-hot-loader/patch',
        'babel-polyfill',
        './src/',
    ],
    output: {
        path: path.resolve(__dirname, '/dist'),
        publicPath: '/dist/',
        filename: 'bundle.js',
    },
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
