module.exports = {
  publicPath: "./", //基本路径
  outputDir: "dist", //构建时的输出目录
  assetsDir: "static", //放置静态资源的目录
  //是否为生产环境构建生成 source map
  productionSourceMap: true,
  //设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
  crossorigin: "", //在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。
  devServer: {
    host: "127.0.0.1",
    port: 8080,
    https: false,
    hotOnly: false, // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli/cli-service.md#配置代理
    proxy: {
      "/api": {
        target: "http://www.proxy.com",
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  //CSS 相关选项
  css: {
    //将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)
    //也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象
    extract: true,
    //是否开启 CSS source map
    sourceMap: false
  }
};
