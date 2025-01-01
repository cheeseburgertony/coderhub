const { UPLOAD_PATH } = require("../config/path");
const userService = require("../service/user.service");
const fs = require("fs");

class UserController {
  async create(ctx, next) {
    // 1.获取用户传递过来的信息
    const user = ctx.request.body;

    // 2.将用户信息存储到数据库中
    const result = await userService.create(user);

    // 3.查看存储的结果，告知前端创建成功
    ctx.body = {
      message: "创建用户成功~",
      data: result,
    };
  }

  async showAvatar(ctx, next) {
    const { userId } = ctx.params;
    const avatarInfo = await userService.queryAvatarByUserId(userId);
    const { filename, mimetype } = avatarInfo;

    ctx.type = mimetype;
    ctx.body = fs.createReadStream(`${UPLOAD_PATH}/${filename}`);
  }
}

module.exports = new UserController();
