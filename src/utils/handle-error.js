const app = require("../app");
const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_IS_ALREADY_EXISTS,
  NAME_IS_NOT_EXISTS,
  PASSWORD_IS_INCORRECT,
  UNAUTHORIZATION,
} = require("../config/error");

app.on("error", (err, ctx) => {
  let code = 0;
  let message = "";

  switch (err) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001;
      message = "用户名或密码不能为空~";
      break;
    case NAME_IS_ALREADY_EXISTS:
      code = -1002;
      message = "用户名已经被占用，不用使用~";
      break;
    case NAME_IS_NOT_EXISTS:
      code = -1003;
      message = "用户名不存在，请注册后再使用~";
      break;
    case PASSWORD_IS_INCORRECT:
      code = -1004;
      message = "密码错误，请重新输入~";
      break;
    case UNAUTHORIZATION:
      code = -2001;
      message = "token不正确或已过期，请重新登录~";
      break;
  }

  ctx.body = { code, message };
});
