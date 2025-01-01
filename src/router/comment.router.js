const KoaRouter = require("@koa/router");
const { verifyAuth } = require("../middleware/login.middleware");
const { create, reply, remove } = require("../controller/comment.controller");

const commentRouter = new KoaRouter({ prefix: "/comment" });

commentRouter.post("/", verifyAuth, create);
commentRouter.post("/reply", verifyAuth, reply);
commentRouter.delete("/:commentId", verifyAuth,remove);

module.exports = commentRouter;
