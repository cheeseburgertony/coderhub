const KoaRouter = require("@koa/router");
const { verifyAuth } = require("../middleware/login.middleware");
const { create, list, detail, update } = require("../controller/moment.controller");

const momentRouter = new KoaRouter({ prefix: "/moment" });

momentRouter.post("/", verifyAuth, create);
momentRouter.get("/", list);
momentRouter.get("/:momentId", detail);
momentRouter.patch("/:momentId", verifyAuth, update);

module.exports = momentRouter;
