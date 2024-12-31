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

const verifyPermission = async (ctx, next) => {
  // 改得更通用
  // 1.获取登录用户的id和资源的id
  const { id } = ctx.user;
  const resourceKey = Object.keys(ctx.params)[0];
  const resourceId = ctx.params[resourceKey];
  // 获取表的名字，一般为资源id的前缀
  const resourceName = resourceKey.replace("Id", "");

  // 2.查询用户是否由权限修改动态
  const isPermission = await permissionService.checkResource(
    resourceName,
    resourceId,
    id
  );
  if (!isPermission) {
    return ctx.app.emit("error", OPERATION_NOT_ALLOWED, ctx);
  }

  await next();
};

module.exports = verifyPermission;
