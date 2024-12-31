const commentService = require("../service/comment.service");

class CommentController {
  async create(ctx, next) {
    const { id } = ctx.user;
    const { momentId, content } = ctx.request.body;
    const result = await commentService.create(content, momentId, id);

    ctx.body = {
      code: 0,
      message: "发表评论成功~",
      data: result,
    };
  }
}

module.exports = new CommentController();
