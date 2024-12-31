const jwt = require("jsonwebtoken");
const { PRIVITE_KEY } = require("../config/secret");

class LoginRouter {
  async sign(ctx, next) {
    // 1.获取用户信息
    const { id, name } = ctx.user;

    // 2.颁发token
    const token = jwt.sign({ id, name }, PRIVITE_KEY, {
      expiresIn: 60 * 60 * 24,
      algorithm: "RS256",
    });

    // 3.返回用户信息和token
    ctx.body = { id, name, token };
  }
}

module.exports = new LoginRouter();
