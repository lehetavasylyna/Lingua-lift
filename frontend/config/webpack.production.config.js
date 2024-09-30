const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const basicConfig = require('./webpack.config');

const config = {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            // modules: {
                            //   mode: "local",
                            // }
                        },
                    },
                ],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
};

module.exports = merge(basicConfig, config);
