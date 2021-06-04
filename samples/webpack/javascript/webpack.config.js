module.exports = {
    mode: "development",
    devtool: "inline-source-map",
    entry: {
        extension: '../../src/index.js',
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    externals: {
        'theoplayer': 'THEOplayer'
    },
    resolve: {
        extensions: [".js"]
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env"]
                }
            }
        }]
    }
};