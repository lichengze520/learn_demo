const envConfig = {
  development: 'dist-dev',
  test: 'dist-test',
  prod: 'production'
}
process.env.VUE_APP_TIME = new Date().getTime()
module.exports = {
  publicPath: './',
  assetsDir: 'static',
  outputDir: envConfig[process.env.NODE_ENV]
}