module.exports = {
    presets: [
        [
            '@babel/env',
            {
                targets: ['last 2 versions', 'IE 11'],
            },
        ],
        [
            '@babel/react',
        ],
    ],
    plugins: [
        '@babel/plugin-syntax-dynamic-import',
    ],
    env: {
        production: {
            plugins: [
                'transform-react-remove-prop-types',
                '@babel/plugin-transform-react-constant-elements',
            ],
        },
        test: {
            plugins: [
                [
                    '@babel/plugin-transform-runtime',
                    {
                        regenerator: true,
                    },
                ],
                [
                    'module-resolver',
                    {
                        root: ['src'],
                    },
                ],
            ],
        },
    },
};
