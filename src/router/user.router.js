const KoaRouter = require("@koa/router");
const { create, showAvatar } = require("../controller/user.controller");
const { verifyUser, handlePassword } = require("../middleware/user.middleware");

// 1. 创建路由对象
const userRouter = new KoaRouter({ prefix: "/users" });
// 2.定义路由中映射
// 2.1.用户注册接口
userRouter.post("/", verifyUser, handlePassword, create);
// 2.2.查看用户头像
userRouter.get("/avatar/:userId", showAvatar);

// 3.导出路由
module.exports = userRouter;
