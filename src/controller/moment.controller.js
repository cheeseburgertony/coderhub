const momentService = require("../service/moment.service");

class MomentController {
  // 发表动态
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
  // 查询动态列表
  async list(ctx, next) {
    // 1.获取来自客户端的开始页和偏移量，用于分页
    const { offset, size } = ctx.query;

    // 2.查询数据库
    const result = await momentService.queryList(offset, size);

    ctx.body = {
      code: 0,
      message: "获取动态列表成功",
      data: result,
    };
  }
  // 查询单条动态详情
  async detail(ctx, next) {
    // 1.获取动态id
    const { momentId } = ctx.params;
    // 2.查询数据库
    const result = await momentService.queryById(momentId);
    // 3.返回结果
    ctx.body = {
      code: 0,
      message: "获取详情成功",
      data: result[0],
    };
  }
}

module.exports = new MomentController();
