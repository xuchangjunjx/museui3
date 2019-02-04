const pages = require("./utils");
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}

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
    config.resolve.alias.set("$index", resolve("src/pages/index"));
  }
};
