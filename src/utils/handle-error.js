const app = require("../app");
const {
  NAME_OR_PASSWORD_IS_REQUIRED,
  NAME_ALREADY_EXISTS,
} = require("../config/error");

app.on("error", (err, ctx) => {
  let code = 0;
  let message = "";

  switch (err) {
    case NAME_OR_PASSWORD_IS_REQUIRED:
      code = -1001;
      message = "用户名或密码不能为空~";
      break;

    case NAME_ALREADY_EXISTS:
      code = -1002;
      message = "用户名已经被占用，不用使用~";
      break;
  }

  ctx.body = { code, message };
});
