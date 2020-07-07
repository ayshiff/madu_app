module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    extensions: [
                        '.js',
                        '.jsx',
                        '.ts',
                        '.tsx',
                        '.json',
                        '.spec.ts'
                    ],
                    root: ['./src'],
                    alias: {
                        madu: './src'
                    }
                }
            ]
        ]
    };
};
