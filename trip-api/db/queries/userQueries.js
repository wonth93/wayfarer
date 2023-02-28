const db = require("../connection");

// Get all users
const getAllUsers = () => {
  return db
    .query(`SELECT * FROM users;`)
    .then((data) => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = { getAllUsers };
