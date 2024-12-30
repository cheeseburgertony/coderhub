const userService = require("../service/user.service");

class UserController {
  async create(ctx, next) {
    // 1.获取用户传递过来的信息
    const user = ctx.request.body;

    

    // 3.将用户信息存储到数据库中
    const result = await userService.create(user);

    // 4.查看存储的结果吗，告知前端创建成功
    ctx.body = {
      message: "创建用户成功~",
      data: result,
    };
  }
}

module.exports = new UserController();
