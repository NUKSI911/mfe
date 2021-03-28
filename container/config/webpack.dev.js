// const  ModuleFederation = require('babel/lib/container/Module')
const HtmlPlugin = require('html-webpack-plugin');
const { merge }  = require('webpack-merge');
const common = require('./webpack.common')



const dev={
    mode:'development',
    devServer:{
        port:8081,
        historyApiFallback:{
            index:'index.html'
        }
    }
    ,
    plugins:[
        new HtmlPlugin({
            template:'./public/index.html'
        })
    ]
}

module.exports = merge(common,dev)