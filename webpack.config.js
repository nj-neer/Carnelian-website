const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const config = {
    mode: 'development',
    entry: ['./src/scripts/carnelian.ts'],
    target: 'web',
    watchOptions: {
        poll: true,
        ignored: /node_modules/
    },

    devServer: {
        hot: true,
        historyApiFallback: true,
        writeToDisk: false,
    },

    module: {

        rules: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
            options: {
                appendTsSuffixTo: [/\.vue$/],
            }
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader'
        },
        {
            test: /\.html/,
            use: [{
                loader: 'file-loader'
            }]
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
        },
        {
            test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts/'
                    }
                }
            ]
        },
        {
            test: /\.(png|jpg|gif|svg)$/,
            loader: 'file-loader',
            options:
                { name: '[name].[ext]?[hash]' }
        },
        {
            test: /\.css/,
            use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',]
        },
        {
            test: /\.s[ac]ss$/i,
            use: [
                // Creates `style` nodes from JS strings
                'style-loader',
                // Translates CSS into CommonJS
                'css-loader',
                // Compiles Sass to CSS
                'sass-loader',
            ],
        },
        ]
    },
    plugins: [
        // static file copy
        new CopyWebpackPlugin([
            { from: './src/index.html' },
            { from: './src/assets', to: 'assets' },
        ]),
        new VueLoaderPlugin(),
    ],
    resolve: {

        extensions: [".ts", ".tsx", ".js", ".jsx"]
    },
    resolveLoader: {
        modules: ["node_modules"]
    },
    output: {
        filename: 'carnelian.js',
        path: path.join(__dirname, 'dist'),
        publicPath: "/"
    },
    externals: {
        'uws': 'uws'
    }

}



module.exports = (env, argv) => {
    console.log("Compiling Carnelian website ...");
    if (argv.mode === 'development') {
        config.devtool = 'inline-source-map';
        console.log("[Development mode]")
    }
    if (argv.mode === 'production') {
        console.log("[Production mode]")
    }
    return [config];
}