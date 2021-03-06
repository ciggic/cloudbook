const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATHS = {
    source: path.join(__dirname, 'app'),
    JS_OUTPUT: path.join(__dirname, '../src/main/resources/static/')
};


module.exports={
    entry : './src/index.js',
    output : {
      path : PATHS.JS_OUTPUT,
      filename:'app.bundle.js'
    },
    module:{
      rules : [
        {
            test : /\.css$/,
            use: ExtractTextPlugin.extract({
              fallback: "style-loader",
              use: ['css-loader']
          })
        },
        {
          test : /\.js$/,
          exclude:/node_modules/,
          use:'babel-loader'
        }
      ]
    },
    devServer: {
      contentBase:PATHS.JS_OUTPUT,
      compress:true,
      port:9090,
      stats:"errors-only"
    },
    plugins: [new HtmlWebpackPlugin({
        title : "Rhocare Demo",
        minify : {
          collapseWhitespace:true
        },
        hash:true,
        template:'./src/index.html'
    }),
    new ExtractTextPlugin({
      filename : "css/custom.css",
      disable :false,
      allChunks:true
    })
  ]
};
