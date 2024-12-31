const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_NOT_EXISTS,
  PASSWORD_IS_INCORRECT,
  UNAUTHORIZATION,
} = require("../config/error");
const { PUBLIC_KEY } = require("../config/secret");
const userService = require("../service/user.service");
const md5password = require("../utils/md5-password");
const jwt = require("jsonwebtoken");

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

// 验证tokne是否有效
const verifyAuth = async (ctx, next) => {
  // 1.获取token
  const authorization = ctx.headers.authorization;
  const token = authorization.replace("Bearer ", "");

  // 2.验证token
  try {
    const res = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ["RS256"],
    });
    // 最终将解析出来的token中的数据放入ctx.user中
    ctx.user = res;
    // 执行下一个中间件
    await next();
  } catch (error) {
    ctx.app.emit("error", UNAUTHORIZATION, ctx);
  }
};

module.exports = { verifyLogin, verifyAuth };
