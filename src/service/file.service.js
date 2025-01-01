const connection = require("../app/database");

class FileService {
  async create(filename, mimetype, size, userId) {
    const statement =
      "INSERT INTO avatar (filename, mimetype, size, user_id) VALUES (?, ?, ?, ?);";
    const [result] = await connection.execute(statement, [
      filename,
      mimetype,
      size,
      userId,
    ]);

    return result;
  }

  async updateUserAvatar(avatarUrl, userId) {
    const statement = "UPDATE user SET avatar_url = ? WHERE id = ?;";
    const [result] = await connection.execute(statement, [avatarUrl, userId]);

    return result;
  }
}

module.exports = new FileService();
