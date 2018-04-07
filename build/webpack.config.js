const path =require("path");
const webpack=require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackDevServer = require('webpack-dev-server');
module.exports={
    //入口
    entry:{
        index:path.join(__dirname,'../src/index.js')
    },
    output:{
        path:path.join(__dirname,'../dist/'),
        filename:'[name].js'

    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader'
                },        
            },
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:__dirname+'/../src/index.html',
            
        })
    ],
    devServer:{
        contentBase:path.join(__dirname,'dist'),
        compress:true,
        port:5555,
        open:true,
        hot:true,
        inline: true
   }


    


}