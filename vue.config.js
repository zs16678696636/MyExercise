// const path = require('path')
// console.log(1111111, process.argv[3])
// console.log(222, process.env.NODE_ENV)
// const CompressionWebpackPlugin = require('compression-webpack-plugin') // 压缩插件
// // 如果此时将项目部署到已开启了gzip的服务器如nginx里面之后，访问浏览器即可看到浏览器下载的是已压缩的文件
// const isProd = process.env.NODE_ENV === 'production' // 判断是否是生产
// const webpack = require('webpack')
// import moment from 'moment'
// //手动引入所需要的语言包
// import 'moment/locale/zh-cn';
// // 指定使用的语言
// moment.locale('zh-cn');
// // ====

// module.exports = {
//   devServer: {
//     port: 8085, // 端口号
//     open: true, // 自动打开浏览器
//     proxy: {
//       '/api': {
//         target: 'http://localhost:8888/api/private/v1/',
//         changeOrigin: true,
//         pathRewrite: { '^/api': '' }
//       }
//     } // /api开头自动拼接并把/api转成空
//   },
//   configureWebpack: config => {
//     // 判断是否是生产
//     if (isProd) {
//       // 配置webpack 压缩
//       config.plugins.push(
//         new CompressionWebpackPlugin({
//           test: /\.js$|\.html$|\.css$/,
//           // 超过4kb压缩
//           threshold: 4096
//         })
//       )
//     }
//   },
//   // configureWebpack: {}
//   chainWebpack: config => {
//     // 优化moment 去掉国际化内容
//     config
//     .plugin('ignore')
//     // 忽略/moment/locale下的所有文件
//     .use(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)) 
//   }
// }