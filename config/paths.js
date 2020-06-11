const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  rootDir:appDirectory,
  appIndex:resolveApp('src/index'), //入口文件
  appSrc:resolveApp('src'), //项目代码主目录
  appDist:resolveApp('dist'), //打包目录
  appHtml:resolveApp('index.html'), //模板文件
}