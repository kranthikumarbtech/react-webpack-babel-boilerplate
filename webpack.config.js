module.exports = {
    entry: [
        './src/index.js'
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node-modules/,
                use: ['babel-loader']

            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', 'jsx']
    },
    output: {
        path: __dirname + './public',
        publicPath: '/',
        filename: 'bundel.js'
    },
    devServer: {
        contentBase: './public',
        port: 3000
    }
};