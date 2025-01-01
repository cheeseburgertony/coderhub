const fileService = require("../service/file.service");
const { SERVER_PORT, SERVER_HOST } = require("../config/server");

class FileController {
  async create(ctx, next) {
    const { filename, mimetype, size } = ctx.request.file;
    const { id } = ctx.user;
    await fileService.create(filename, mimetype, size, id);

    // 将文件地址保存到user表中的avatar_url字段
    const avatarUrl = `${SERVER_HOST}:${SERVER_PORT}/users/avatar/${id}`;
    await fileService.updateUserAvatar(avatarUrl, id);

    ctx.body = {
      code: 0,
      message: "头像上传成功",
      data: avatarUrl,
    };
  }
}

module.exports = new FileController();
