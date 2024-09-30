const { merge } = require('webpack-merge');
const basicConfig = require('./webpack.config');

const config = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
            },
        ],
    },
};

module.exports = merge(basicConfig, config);
