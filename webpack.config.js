var path = require("path");
var webpack = require('webpack');
const lessRegex = /\.less$/;

module.exports = {
    entry: { app: ['./asset/js/main.jsx'] },
    output: {
        path: path.resolve(__dirname, "./build"),
        publicPath: "http://127.0.0.1:5000/build/",
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['','.js','.jsx']
    },
    module: {
        rules:[
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname),
                exclude: path.resolve(__dirname, "node_modules"),
                options:{
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: lessRegex,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        port: 5000
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE.ENV':"development"
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};