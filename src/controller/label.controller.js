const lableService = require("../service/lable.service");

class LabelController {
  async create(ctx, next) {
    const { name } = ctx.request.body;
    const result = await lableService.create(name);

    ctx.body = {
      code: 0,
      message: "创建标签成功",
      data: result,
    };
  }

  async list(ctx, next) {
    const { offset = 0, limit = 10 } = ctx.query;
    const result = await lableService.queryList(offset, limit);

    ctx.body = {
      code: 0,
      message: "查询标签列表成功",
      data: result,
    };
  }
}

module.exports = new LabelController();
