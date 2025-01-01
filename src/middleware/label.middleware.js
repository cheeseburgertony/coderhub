const lableService = require("../service/lable.service");

/**
 * 传入labels时，不确定labels是否有name已经存在labels表中
 * 所以需要将labels都保存在labels中，获取labels的id
 * 将获取到的labels挂载到ctx上，以供传递给下一个中间件
 */
const verifyLabelExists = async (ctx, next) => {
  // 1.获取客户传递过来的所有labels
  const { labels } = ctx.request.body;

  // 2.判断每一个label在label表中是否存在
  const newLabels = [];
  for (let name of labels) {
    const result = await lableService.queryLabelByName(name);
    const labelObj = { name };
    if (result) {
      // 标签存在，直接将id挂载到labelObj上
      labelObj.id = result.id;
    } else {
      // 标签不存在，创建标签，并获取标签id挂载到labelObj上
      const insertResult = await lableService.create(name);
      labelObj.id = insertResult.insertId;
    }
    newLabels.push(labelObj);
  }

  // 3.将新的标签数组挂载到ctx上
  ctx.labels = newLabels;

  await next();
};

module.exports = verifyLabelExists;
