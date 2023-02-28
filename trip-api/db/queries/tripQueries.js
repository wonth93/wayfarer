const db = require("../connection");

// Get all trips
const getAllTrips = () => {
  return db
    .query(`SELECT * FROM trips;`)
    .then((data) => {
      return data.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

// Get all trips for user on home page
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

// Get single trip info
const getSingleTrip = (trip_id) => {
  return db
    .query(
      `
      SELECT *
      FROM trip
      WHERE id = $1;
    `,
      [trip_id]
    )
    .then((result) => {
      return result.rows[0];
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = {
  getAllTrips,
  getAllTripsForUser,
  getSingleTrip,
};
