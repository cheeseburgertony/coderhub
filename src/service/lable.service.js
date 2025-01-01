const connection = require("../app/database");

class LabelService {
  async create(label) {
    const statement = "INSERT INTO label (name) VALUES (?);";
    const [result] = await connection.execute(statement, [label]);
    return result;
  }
}

module.exports = new LabelService();
