export default {   // export default
    entry: { '@babel/polyfill', './html/ttt.js'},
    output: {
        path: './dist/js',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },

    devtool: 'source-map',
    mode: 'development',
};
d