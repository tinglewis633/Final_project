const db = require("../db");

const getUserById = (id) => {
  return db
    .query("SELECT * FROM users WHERE id = $1;", [id])
    .then((response) => {
      return response.rows[0];
    });
};

const findUserByUsername = function (user) {
  const stringQuery = `
  SELECT *
  FROM users
  WHERE name = $1;
  `;
  return db.query(stringQuery, [user]).then((data) => data.rows[0]);
};

const createUser = function (user, password, email, date_of_birth) {
  const stringQuery = `
  INSERT INTO users (name, password, email, date_of_birth)
  VALUES ($1, $2, $3, $4);

  `;
  return db
    .query(stringQuery, [user, password, email, date_of_birth])
    .then((data) => findUserByUsername(user));
};

module.exports = { getUserById, findUserByUsername, createUser };
