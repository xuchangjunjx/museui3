const fs = require("fs");
const path = require("path");
const MOD_PATH = path.resolve(__dirname, "./src/pages");
const files = fs.readdirSync(MOD_PATH);

const pages = {};
files.forEach(file => {
  if (file.indexOf(".") !== 0) {
    let fileName = file;
    let index = "";
    // 这样可以默认一个路由 不会出现访问根路径404的情况
    if (fileName === "index") {
      index = `index.html`;
    } else {
      index = `${fileName}/index.html`;
    }
    pages[file] = {
      entry: `src/pages/${fileName}/main.js`,
      template: "public/index.html",
      filename: index
    };
  }
});
module.exports = pages;
