const path = require("path");

const resolve = dir => path.join(__dirname, dir);

const BASE_URL = process.env.NODE_ENV === "procution" ? "/iview-admin/" : "/";

module.exports = {
  lintOnSave: false,
  // 项目基本路径
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("_c", resolve("src/components"));
  },
  // 打包时不生成.map 文件
  procutionSourceMap: false,
  // 跨域，将任何位置请求都代理到如下 URL
  devServer: {
    proxy: "http://localhost:4000"
  }
};
