module.exports = function (api) {
    api.cache(true);
    return {
<<<<<<< HEAD
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
                    root: ['./src'],
                    alias: {
                        madu: './src'
                    }
                }
            ]
        ]
=======
        presets: ['babel-preset-expo']
>>>>>>> 48a46ca856bea9db5e5f57ec15a5288758426466
    };
};
