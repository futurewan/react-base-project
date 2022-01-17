const webpack = require('webpack');
const ora = require('ora');
const configFactory = require('./webpack.config');
const spinner = ora('building for production...');
const config = configFactory('production');

spinner.start();
const compiler = webpack(config, (err, stats) => {
  if (err) {
    throw err;
  }
  // console.log(stats.toJson({ all: false, assets: true }));
  process.stdout.write(
    stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false,
    }) + '\n\n'
  );
  if (stats.hasErrors()) {
    spinner.fail('  Build failed with errors.\n');
    process.exit(1);
  }
  spinner.succeed('build success');
});
