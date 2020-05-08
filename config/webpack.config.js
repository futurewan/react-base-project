const paths = require('./paths');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';
  const getStyleLoaders = () => {
    const loaders = [isEnvDevelopment && 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader'].filter(Boolean);
    return loaders;
  };
  let entry = [paths.appIndex];
  return {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    entry: entry,
    output: {
      path: paths.appDist,
      publicPath: './',
      filename: `static/js/[name]${isEnvProduction ? '.[contenthash:8]' : ''}.js`,
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
        },
        {
          test: /\.(sc|c)ss$/,
          use: getStyleLoaders(),
          exclude: /node_modules/,
        },
        {
          test: /\.(gif|png|jpe?g|svg)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'img/[name].[ext]?[hash]',
              },
            },
          ],
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'fonts/[name].[hash:7].[ext]',
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: paths.appHtml,
        favicon: 'favicon.ico',
      }),
      isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
      publicPath: '/',
      host: '0.0.0.0',
      disableHostCheck: true,
      compress: true,
      port: 9001,
      historyApiFallback: true,
      open: true,
      hot: true
    },
  };
};
