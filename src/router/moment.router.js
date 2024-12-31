const KoaRouter = require("@koa/router");
const { verifyAuth } = require("../middleware/login.middleware");
const {
  create,
  list,
  detail,
  update,
  remove,
} = require("../controller/moment.controller");
const verifyMomentPermission = require("../middleware/permission.middleware");

const momentRouter = new KoaRouter({ prefix: "/moment" });

momentRouter.post("/", verifyAuth, create);
momentRouter.get("/", list);
momentRouter.get("/:momentId", detail);
momentRouter.patch("/:momentId", verifyAuth, verifyMomentPermission, update);
momentRouter.delete("/:momentId", verifyAuth, verifyMomentPermission, remove);

module.exports = momentRouter;
