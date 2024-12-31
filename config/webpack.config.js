const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const os = require('os');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const paths = require('./paths');

const env = require(`../env/${process.env.NODE_ENV_MARK}.env`);

module.exports = function (webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';
  const getStyleLoaders = () => {
    const loaders = [isEnvProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'postcss-loader', 'sass-loader'].filter(Boolean);
    return loaders;
  };

  const entry = { app: paths.appIndex };
  let webpackConfig = {
    devtool: isEnvDevelopment ? 'cheap-module-eval-source-map' : 'source-map',
    mode: isEnvProduction ? 'production' : 'development',
    entry,
    output: {
      path: paths.appDist,
      publicPath: './react-base-project/',
      filename: `static/js/[name]${isEnvProduction ? '.[contenthash:8]' : ''}.js`,
    },
    module: {
      // noParse: /lodash/,
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader?cacheDirectory=true',
          include: paths.appSrc,
          exclude: /node_modules/,
        },
        {
          test: /\.(sc|c)ss$/,
          use: getStyleLoaders(),
        },
        {
          test: /\.(gif|png|jpe?g|svg)(\?.*)?$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'static/img/[name].[ext]?[hash]',
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
    optimization: {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
        }),
        new OptimizeCSSAssetsPlugin(),
      ],
      splitChunks: {
        cacheGroups: {
          dll: {
            chunks: 'all',
            test: /[\\/]node_modules[\\/](react|react-dom|react-redux|react-router-dom|redux)[\\/]/,
            name: 'dll',
            priority: 100,
            /* 为此缓存组创建块时，告诉webpack忽略minSize,minChunks,maxAsyncRequests,maxInitialRequests选项。*/
            enforce: true,
            reuseExistingChunk: true,
          },
          commons: {
            name: 'commons',
            minChunks: 2, // Math.ceil(pages.length / 3), 当你有多个页面时，获取pages.length，至少被1/3页面的引入才打入common包
            chunks: 'all',
            reuseExistingChunk: true,
          },
        },
        chunks: 'all',
        name: true,
      },
      // runtimeChunk: true
    },
    performance: {
      // false | "error" | "warning" // 不显示性能提示 | 以错误形式提示 | 以警告形式提示
      hints: isEnvProduction ? 'warning' : false,
      // 开发环境设置较大防止警告
      // 根据入口起点的最大体积，控制webpack何时生成性能提示,整数类型,以字节为单位
      maxEntrypointSize: 250000,
      // 最大单个资源体积，默认250000 (bytes)
      maxAssetSize: 250000,
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': env,
      }),
      isEnvProduction &&
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: paths.appHtml,
          favicon: 'favicon.ico',
        }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: paths.appStatic,
            to: 'static/',
          },
        ],
      }),
      new HappyPack({
        id: 'happyBabel',
        loaders: ['babel-loader?cacheDirectory=true'],
        threadPool: happyThreadPool,
        verbose: true,
      }),
      isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
      isEnvProduction && new CleanWebpackPlugin(),
      isEnvProduction &&
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash:10].css',
        }),
      process.env.NODE_ENV_REPORT && new BundleAnalyzerPlugin(),
    ].filter(Boolean),
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        '@redux': paths.appRedux,
        '@pages': paths.appPages,
        '@util': paths.util,
      },
      modules: ['node_modules', paths.appNodeModules], // 默认是当前目录下的 node_modules
    },
    devServer: {
      publicPath: '/',
      host: '0.0.0.0',
      disableHostCheck: true,
      compress: true,
      port: 9001,
      historyApiFallback: true,
      open: true,
      hot: true,
    },
  };

  if (process.env.NODE_ENV_REPORT) {
    webpackConfig = smp.wrap(webpackConfig);
  }
  return webpackConfig;
};
