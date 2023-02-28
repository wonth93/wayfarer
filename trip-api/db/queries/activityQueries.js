const db = require("../connection");

// Get all trips
const getAllActivities = () => {
  return db
    .query(`SELECT * FROM activities;`)
    .then((data) => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = { getAllActivities };
