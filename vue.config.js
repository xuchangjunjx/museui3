const pages = require("./utils");

module.exports = {
  baseUrl:
    process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
  pages,
  chainWebpack: config => {
    config.module
      .rule("md")
      .test(/\.md$/)
      .use("raw-loader")
      .loader("raw-loader")
      .end();
  }
};
