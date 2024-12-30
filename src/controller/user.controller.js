const userService = require("../service/user.service");

class UserController {
  create(ctx, next) {
    // 1.获取用户传递过来的信息
    const user = ctx.request.body;

    // 2.判断逻辑
    console.log(user);

    // 2.将用户信息存储到数据库中
    userService.create(user);

    // 3.查看存储的结果吗，告知前端创建成功
    ctx.body = "用户创建成功";

    next();
  }
}

module.exports = new UserController();
