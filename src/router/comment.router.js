const KoaRouter = require("@koa/router");
const { verifyAuth } = require("../middleware/login.middleware");
const { create } = require("../controller/comment.controller");

const commentRouter = new KoaRouter({ prefix: "/comment" });

commentRouter.post("/", verifyAuth, create);

module.exports = commentRouter;
