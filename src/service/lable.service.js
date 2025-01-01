const connection = require("../app/database");

class LabelService {
  async create(label) {
    const statement = "INSERT INTO label (name) VALUES (?);";
    const [result] = await connection.execute(statement, [label]);
    return result;
  }

  async queryList(offset, limit) {
    const statement =
      "SELECT id labelId, name labelName FROM label LIMIT ?, ?;";
    const [result] = await connection.execute(statement, [offset, limit]);
    return result;
  }
}

module.exports = new LabelService();
