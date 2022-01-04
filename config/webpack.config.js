const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const os = require('os');
const HappyPack = require('happypack');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin();

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const paths = require('./paths');

const cientEnvironment = require('./env');
const env = cientEnvironment();

module.exports = function (webpackEnv) {
  const isEnvDevelopment = webpackEnv === 'development';
  const isEnvProduction = webpackEnv === 'production';
  const getStyleLoaders = () =>
    [
      isEnvProduction ? MiniCssExtractPlugin.loader : 'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: '[name]-[local]-[hash:base64:5]',
          },
        },
      },
      'postcss-loader',
      'sass-loader',
    ].filter(Boolean);

  const entry = { app: paths.appIndex };
  let webpackConfig = {
    devtool: isEnvDevelopment ? 'inline-source-map' : 'source-map',
    mode: isEnvProduction ? 'production' : 'development',
    entry,
    output: {
      path: paths.appDist,
      publicPath: '/',
      filename: `static/js/[name]${isEnvProduction ? '.[contenthash:8]' : ''}.js`,
    },
    module: {
      // noParse: /lodash/,
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
          include: paths.appSrc,
          exclude: /node_modules/,
        },
        {
          test: /\.(sc|c)ss$/,
          use: getStyleLoaders(),
        },
        {
          test: /\.(gif|png|jpe?g|svg)(\?.*)?$/,
          type: 'asset',
          generator: {
            filename: 'static/img/[name].[ext]?[hash]',
          },
          parser: {
            dataUrlCondition: {
              maxSize: 10 * 1024,
            },
          },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          type: 'asset/resource',
          generator: {
            filename: 'fonts/[name].[hash:7].[ext]',
          },
        },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              inline: 2,
            },
            output: {
              comments: false,
            },
          },
        }),
        new OptimizeCSSAssetsPlugin(),
      ],
      splitChunks: {
        chunks: 'all',
        // name: true,
        minChunks: 2,
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
      new webpack.DefinePlugin(env),
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            inject: true,
            filename: 'index.html',
            template: paths.appHtml,
            favicon: 'favicon.ico',
          },
          isEnvProduction
            ? {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true,
                },
              }
            : undefined
        )
      ),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: paths.appStatic,
            to: 'static',
          },
        ],
      }),
      new webpack.ProgressPlugin(),
      // new HappyPack({
      //   id: 'happyBabel',
      //   loaders: ['babel-loader?cacheDirectory=true'],
      //   threadPool: happyThreadPool,
      //   verbose: true,
      // }),
      isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
      isEnvProduction &&
        new CleanWebpackPlugin({
          verbose: true,
        }),
      isEnvProduction &&
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash:10].css',
        }),
      process.env.NODE_ENV_REPORT && new BundleAnalyzerPlugin(),
    ].filter(Boolean),
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      alias: {
        '@redux': paths.appRedux,
        '@pages': paths.appPages,
        '@util': paths.appUtil,
        '@interfaces': paths.appInterfaces,
      },
      modules: ['node_modules', paths.appNodeModules], // 默认是当前目录下的 node_modules
    },
    devServer: {
      // contentBase: './',
      host: '0.0.0.0',
      // disableHostCheck: true,
      allowedHosts: 'all',
      compress: true,
      port: 9008,
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
