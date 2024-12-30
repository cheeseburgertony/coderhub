const KoaRouter = require("@koa/router");

// 1. 创建路由对象
const userRouter = new KoaRouter({ prefix: "/users" });

// 2.定义路由中映射
userRouter.get("/list", (ctx, next) => {
  ctx.body = "user list";
});

// 3.到处路由
module.exports = userRouter;
