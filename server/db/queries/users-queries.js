const db = require("../db");

const getUserById = (id) => {
  return db
    .query("SELECT * FROM users WHERE id = $1;", [id])
    .then((response) => {
      return response.rows[0];
    });
};

module.exports = { getUserById };
