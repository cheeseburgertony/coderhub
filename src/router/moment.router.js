const KoaRouter = require("@koa/router");
const { verifyAuth } = require("../middleware/login.middleware");
const {
  create,
  list,
  detail,
  update,
  remove,
  addLabels,
} = require("../controller/moment.controller");
const verifyPermission = require("../middleware/permission.middleware");
const verifyLabelExists = require("../middleware/label.middleware");

const momentRouter = new KoaRouter({ prefix: "/moment" });

momentRouter.post("/", verifyAuth, create);
momentRouter.get("/", list);
momentRouter.get("/:momentId", detail);
momentRouter.patch("/:momentId", verifyAuth, verifyPermission, update);
momentRouter.delete("/:momentId", verifyAuth, verifyPermission, remove);

/**
 * 添加标签
 * 中间件:
 *  1.是否登录
 *  2.是否有权限进行操作
 *  3.额外的中间件：验证label是否已经存在label中
 *   - 如果存在，直接获取labelId
 *   - 如果不存在，先创建label，再获取labelId
 *  4.最终步骤
 *   - 所有的标签都已经存在label表中了
 *   - 将动态和labels建立联系，添加到表中
 */
momentRouter.post(
  "/:momentId/labels",
  verifyAuth,
  verifyPermission,
  verifyLabelExists,
  addLabels
);

module.exports = momentRouter;
