const { OPERATION_NOT_ALLOWED } = require("../config/error");
const permissionService = require("../service/permission.service");

const verifyMomentPermission = async (ctx, next) => {
  // 1.获取登录用户的id/修改动态的id
  const { id } = ctx.user;
  const { momentId } = ctx.params;

  // 2.查询用户是否由权限修改动态
  const isPermission = await permissionService.checkMoment(momentId, id);
  if (!isPermission) {
    return ctx.app.emit("error", OPERATION_NOT_ALLOWED, ctx);
  }

  await next();
};

module.exports = verifyMomentPermission;
