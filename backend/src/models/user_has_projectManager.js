const AbstractManager = require("./AbstractManager");

class user_has_projectManager extends AbstractManager {
  static table = "user_has_project";

  insert(newProject) {
    const { userId, projectId, role } = newProject;

    return this.connection.query(
      `insert into ${this.table} (user_Id, project_Id, role) VALUES (?,?,?)`,
      [userId, projectId, role]
    );
  }
}

module.exports = user_has_projectManager;