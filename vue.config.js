const { defineConfig } = require('@vue/cli-service')
// vue.config.js
const path = require('path');
const IS_PROD = ['production', 'prod'].includes(process.env.NODE_ENV);
const resolve = (dir) => path.join(__dirname, dir)
module.exports = defineConfig({
  publicPath: process.env.VUE_APP_PATH,  // 公共路径
  outputDir: process.env.outputDir || 'dist', // 'dist', 生产环境构建文件的目录
  assetsDir: 'static', // 相对于outputDir的静态资源(js、css、img、fonts)目录
  productionSourceMap: !IS_PROD, // 生产环境的 source map
  devServer: {
    https: false, // https:{type:Boolean}
    open: false, //配置自动启动浏览器
    proxy: { //配置多个跨域
      "/api": {
        target: "https://api.weixin.qq.com/",
        changeOrigin: true,
        // ws: true,//websocket支持
        secure: false,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
})
