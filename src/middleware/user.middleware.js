const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_ALREADY_EXISTS,
} = require("../config/error");
const userService = require("../service/user.service");

const verifyUser = async (ctx, next) => {
  // 2.验证客户端传递过来的user是否可以保存到数据库中
  // 2.1.验证用户名和密码不能为空
  const { name, password } = ctx.request.body;
  if (!name || !password) {
    return ctx.app.emit("error", NAME_OR_PASSWORD_IS_REQUIRED, ctx);
  }

  // 2.2.验证用户名是否被注册过
  const users = await userService.findUserByName(name);
  if (users.length) {
    return ctx.app.emit("error", NAME_ALREADY_EXISTS, ctx);
  }

  // 3.验证通过，执行下一步
  await next();
};

module.exports = {
  verifyUser,
};
