'use strict'
// Template version: 1.3.1
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

const global = {
  // true表示生产
  PRODUCTFLAG: false,
// 测试ip
  DEVIP: "192.168.10.106",
// 生产ip
  PRODUCTIP: "175.24.234.32",
  JAVAPORT: "8088",
// 前端项目端口号
  VUEPORT: "8086",
}
// 后端项目端口号

// 不加() 三元运算返回true
const targetIP = 'http://' + (global.PRODUCTFLAG ? global.PRODUCTIP : global.DEVIP);
// wifi ip不固定
const viewIP = global.PRODUCTFLAG ? global.PRODUCTIP : global.DEVIP;

// 手机热点
// const viewIP ='172.20.10.3';
module.exports = {
  // 将global传递给TabBottom.vue
  global,
  dev: {
    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: global.PRODUCTFLAG ? './' : '/',
    proxyTable: {
      // 这里的api 表示如果我们的请求地址有/api的时候,就出触发代理机制
      // http://localhost:9588/api/abc  => 代理给另一个服务器
      // 本地的前端  =》 本地的后端  =》 代理我们向另一个服务器发请求 （行得通,代理服务和后端服务之间由于并不经过浏览器没有同源策略的限制，可以直接发送请求）
      // 本地的前端  =》 另外一个服务器发请求 （跨域 行不通）
      '/api/': {
        // 真正访问的api地址
        target: targetIP + ':' + global.JAVAPORT + '/',
        changeOrigin: true, // 是否跨域 需要设置此值为true 才可以让本地服务代理我们发出请求
        // 路径重写
        pathRewrire: {
          // 假设我们想把 http://localhost:9588/api/abc 变成www.baidu.com/abc 就需要这么做
          '^/api': ''
        }
      }
    },

    // Various Dev Server settings
    // 前端项目运行ip
    host: viewIP,
    // 前端项目运行端口
    port: global.VUEPORT, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: true,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warnings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warnings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: 'http://' + global.PRODUCTFLAG ? global.PRODUCTIP : this.DEVIP + ':' + global.VUEPORT + '/ELE-PEO/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
