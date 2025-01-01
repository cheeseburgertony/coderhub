const connection = require("../app/database");

class CommentService {
  async create(content, momentId, userId) {
    const statement =
      "INSERT INTO comment (content, moment_id, user_id) VALUES (?, ?, ?);";
    const [result] = await connection.execute(statement, [
      content,
      momentId,
      userId,
    ]);

    return result;
  }

  async reply(content, moment_id, user_id, comment_id) {
    const statement =
      "INSERT INTO comment (content, moment_id, user_id, comment_id) VALUES (?, ?, ?, ?);";
    const [result] = await connection.execute(statement, [
      content,
      moment_id,
      user_id,
      comment_id,
    ]);

    return result;
  }

  async remove(commentId) {
    const statement = "DELETE FROM comment WHERE id = ?;";
    const [result] = await connection.execute(statement, [commentId]);

    return result;
  }
}

module.exports = new CommentService();
