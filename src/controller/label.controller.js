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
}

module.exports = new LabelController();
