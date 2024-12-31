const connection = require("../app/database");

class MomentService {
  async create(content, userId) {
    const statement = "INSERT INTO `moment` (content, user_id) VALUES (?, ?);";
    const [result] = await connection.execute(statement, [content, userId]);
    return result;
  }

  async queryList(offset, size) {
    const statement = `
      SELECT
        m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
        JSON_OBJECT('id',u.id, 'name', u.name, 'creatTime', u.creatAt, 'updateTime', u.updateAt) user
      FROM moment m
      LEFT JOIN user u
      ON m.user_id = u.id
      LIMIT ?, ?;
    `;

    const [result] = await connection.execute(statement, [offset, size]);
    return result;
  }
}

module.exports = new MomentService();
