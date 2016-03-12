var path = require('path');

module.exports = [
    {
        test: /\.js$|\.jsx$/,
        loaders: [
            'react-hot',
            'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-0'
        ],
        exclude: /[\\\/]node_modules[\\\/](?!react-redux-grid)/
    },
    {
        test: /\.styl$/,
        exclude: /\.json$/,
        loaders: ['style-loader', 'css-loader', 'stylus-loader']
    },
    {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ['url-loader?limit=10000&mimetype=application/font-woff']
    },
    {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: ['file-loader']
    },
    {
        test: /\.json$/,
        loaders: ['json-loader']
    }
];