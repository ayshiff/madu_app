module.exports = {
    root: true,
    extends: [
        '@react-native-community',
        'airbnb-typescript',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react'
    ],
    parserOptions: {
        project: './tsconfig.json'
    },
    rules: {
        'import/prefer-default-export': 'off',
        'react/jsx-props-no-spreading': 'off'
    }
};
