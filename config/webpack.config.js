const paths = require('./paths');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(webpackEnv){
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';

  return {
    mode:isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    entry:[paths.appIndex],
    output:{
      path:paths.appDist,
      publicPath:'./',
      filename:'static/js/[name].[contenthash:8].js'
    },
    module:{
      rules:[
        {
          test: /\.js$/,
          loader: 'babel-loader'
        }
      ]
    },
    plugins:[
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: paths.appHtml,
        favicon: 'favicon.ico'
      })
    ],
    devServer: {
      publicPath: '/',
      host: '0.0.0.0',
      disableHostCheck: true,
      compress: true,
      port: 9001,
      historyApiFallback: true,
      open: true
    }
  }
}