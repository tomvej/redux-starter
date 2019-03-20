module.exports = {
    extends: 'airbnb',
    parser: 'babel-eslint',
    env: {
        es6: true,
        browser: true,
        node: true,
        mocha: true,
    },
    plugins: ['react-hooks'],
    settings: {
        'import/resolver': {
            node: {
                paths: ['./src'],
            },
        },
    },
    rules: {
        // FORMATTING
        indent: ['error', 4, {
            SwitchCase: 1, // case should be more indented than switch
        }],
        'react/jsx-indent': ['error', 4],
        'object-curly-spacing': ['error', 'never'],
        'object-curly-newline': ['error', {multiline: true, consistent: true}],
        'max-len': ['error', 140],
        'arrow-parens': ['error', 'always'],
        curly: ['error', 'all'],
        'no-else-return': 'off',

        // REACT
        'react/jsx-filename-extension': ['error', {extensions: ['.js']}],
        'react-hooks/rules-of-hooks': 'error',

        // JSX-A11Y
        // problematic with control inside label
        'jsx-a11y/label-has-for': 'off',
        'jsx-a11y/label-has-associated-control': 'off',
    },
};
