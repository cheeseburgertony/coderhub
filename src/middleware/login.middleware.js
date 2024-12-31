const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_NOT_EXISTS,
  PASSWORD_IS_INCORRECT,
} = require("../config/error");
const userService = require("../service/user.service");
const md5password = require("../utils/md5-password");

const verifyLogin = async (ctx, next) => {
  // 1.验证用户名和密码是否为空
  const { name, password } = ctx.request.body;
  if (!name || !password) {
    return ctx.app.emit("error", NAME_OR_PASSWORD_IS_REQUIRED, ctx);
  }
  // 2.验证用户名是否存在
  const users = await userService.findUserByName(name);
  const user = users[0];
  if (!user) {
    return ctx.app.emit("error", NAME_IS_NOT_EXISTS, ctx);
  }

  // 3.验证密码是否正确
  if (user.password !== md5password(password)) {
    return ctx.app.emit("error", PASSWORD_IS_INCORRECT, ctx);
  }

  // 4.将user对象保存在ctx中，以供后面token生成使用
  ctx.user = user;

  await next();
};

module.exports = verifyLogin;
