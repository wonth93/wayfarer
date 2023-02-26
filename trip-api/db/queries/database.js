const db = require("../connection");

// Get all user
const getUsers = () => {
  return db
    .query("SELECT * FROM users;")
    .then((data) => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// Get all car post on home page
const getAllTripsForUser = (user_id) => {
  return db
    .query(
      `
      SELECT *
      FROM trips
      WHERE user_id = $1
      ORDER BY departure_flight_date;`,
      [user_id]
    )
    .then((data) => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};
module.export = {
  getUsers,
  getAllTripsForUser,
};
