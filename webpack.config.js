const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js' 
    },
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    },
    devtool: 'cheap-module-eval-source-map'
};

