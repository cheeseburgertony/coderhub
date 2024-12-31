const momentService = require("../service/moment.service");

class MomentController {
  async create(ctx, next) {
    // 1.获取动态内容
    const { content } = ctx.request.body;

    // // 2.动态由谁发布，获取用户信息
    const { id } = ctx.user;

    // 3.将动态插入到数据库
    const result = await momentService.create(content, id);

    ctx.body = {
      code: 0,
      message: "发表动态成功",
      data: result,
    };
  }

  async list(ctx, next) {
    // 1.获取来自客户端的开始页和偏移量，用于分页
    const { offset, size } = ctx.query;
    console.log(offset, size);

    // 2.查询数据库
    const result = await momentService.queryList(offset, size);

    ctx.body = {
      code: 0,
      message: "获取动态列表成功",
      data: result,
    };
  }
}

module.exports = new MomentController();
