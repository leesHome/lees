const path = require('path')
const devEnv = require('./dev.env')

module.exports = {
  dev: {
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    port: 8080,
    // proxyTable: devEnv.OPEN_PROXY === false ? {} : {
    //   '/api': {
    //     target: 'http://10.204.133.70:9100',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': '/'
    //     }
    //   }
    // }
  },
  build: {
    index: path.resolve(__dirname, 'dist/index.html'),
    assetsRoot: path.resolve(__dirname, 'dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true
  }
}
