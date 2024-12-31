const fs = require("fs");

// 自动注册路由
const registerRouters = (app) => {
  // 1.读取当前文件下的所有文件
  const files = fs.readdirSync(__dirname);

  // 2.遍历所有的文件，为rouer文件的就进行注册
  for (const file of files) {
    if (!file.endsWith(".router.js")) continue;
    const router = require(`./${file}`);
    app.use(router.routes());
    app.use(router.allowedMethods());
  }
};

module.exports = registerRouters;
