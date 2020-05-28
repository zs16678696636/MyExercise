const path = require('path')
console.log(1111111, process.argv[3])
console.log(222, process.env.NODE_ENV)
module.exports = {
  devServer: {
    port: 8085, // 端口号
    open: true, // 自动打开浏览器
    proxy: {
      '/api': {
        target: 'http://localhost:8888/api/private/v1/',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    } // /api开头自动拼接并把/api转成空
  },
  configureWebpack: {}
}