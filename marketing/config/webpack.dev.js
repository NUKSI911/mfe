const { merge } = require('webpack-merge');
const moduleFederation = require('webpack/lib/container/ModuleFederationPlugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const  commonConfig = require('./webpack.common') 
const packageJson = require('../package.json')

const devConfig = {
    mode:'development',
    devServer:{
        port:8083,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new moduleFederation({
            name:'marketing',
            filename:'entrypoint.js',
            exposes:{
                './MarketingApp':'./src/bootstrap'
            },
            shared:packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig,devConfig)


