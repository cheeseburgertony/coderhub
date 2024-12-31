// 1.导入app
const app = require("./app");
const { SERVER_PORT } = require("./config/server");
require("./utils/handle-error");


// 2.启动服务器
app.listen(SERVER_PORT, () => {
  console.log("CoderHub服务器启动成功~");
});
