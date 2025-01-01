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
  // 修改动态
  async update(ctx, next) {
    const { momentId } = ctx.params;
    const { content } = ctx.request.body;
    const result = await momentService.update(content, momentId);

    ctx.body = {
      code: 0,
      message: "修改动态成功",
      data: result,
    };
  }
  // 删除动态
  async remove(ctx, next) {
    const { momentId } = ctx.params;
    const result = await momentService.remove(momentId);

    ctx.body = {
      code: 0,
      message: "删除动态成功",
      data: result,
    };
  }
  // 给动态添加标签
  async addLabels(ctx, next) {
    // 获取标签和动态id
    const labels = ctx.labels;
    const { momentId } = ctx.params;

    // 判断标签和动态是否已经建立过联系了
    try {
      for (let label of labels) {
        const isExists = await momentService.hasLabel(momentId, label.id);
        if (!isExists) {
          const result = await momentService.addLabel(momentId, label.id);
        }
      }

      ctx.body = {
        code: 0,
        message: "给动态添加标签成功",
      };
    } catch (error) {
      ctx.body = {
        code: -3001,
        message: "给动态添加标签失败",
      };
    }
  }
}

module.exports = new MomentController();
