const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/browser/main.js',
    // watch: true,
    output: {
        path: path.resolve(__dirname, 'public/assets/'),
        publicPath: '/assets/',
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        open: true,
        port: 9000,
        hot: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        },
        {
            test: /\.css$/,
            use: [/*'style-loader'*/ MiniCssExtractPlugin.loader, 'css-loader']
        }]
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all' // Teilt gemeinsam genutzten Code automatisch ab
    //     }
    // },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ],
    target: 'web',
    
};