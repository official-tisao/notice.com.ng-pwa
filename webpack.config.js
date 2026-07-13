const path = require('path');
const webpack = require('webpack');

module.exports = {
    // Entry point for the application
    entry: './src/index.js', // Adjust the entry point as necessary
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: 'bundle.js', // Output bundle file
    },
    module: {
        rules: [
            // Add loaders for other file types as needed
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    plugins: [
        // Other plugins if any
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),
    ],
    // Add any other configurations such as devServer, resolve, etc.
};
