var path = require('path');

module.exports = [
    {
        test: /\.js$|\.jsx$/,
        loaders: ['react-hot', 'babel-loader?stage=0&optional=runtime'],
        exclude: /node_modules|\.json$/,
        options: {
            optional: ['runtime']
        }
    },
    {
        test: /\.js$|\.jsx$/,
        include: [
            path.resolve(__dirname, '../node_modules/react-redux-grid/')
        ],
        exclude: /node_modules\/(?!react-redux-grid)/,
        loaders: ['react-hot', 'babel-loader?stage=0&optional=runtime'],
        options: {
            optional: ['runtime']
        }
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