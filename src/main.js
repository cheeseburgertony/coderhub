const Koa = require("koa");
const KoaRouter = require("@koa/router");

const app = new Koa();
const userRouter = new KoaRouter({ prefix: "/users" });

userRouter.get("/list", (ctx, next) => {
  ctx.body = "user list";
});

app.use(userRouter.routes());
app.use(userRouter.allowedMethods());

app.listen(8000, () => {
  console.log("CoderHub服务器启动成功~");
});
