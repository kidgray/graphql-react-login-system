const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js' 
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /(\.js|\.jsx)$/,
                exclude: /node_modules/
            },
            {
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                test: /.\s?css$/
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    },
    devtool: 'cheap-module-eval-source-map'
};

