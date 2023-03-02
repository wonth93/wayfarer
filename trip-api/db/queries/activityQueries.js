const db = require("../connection");

// Get all activities
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

// Get all activities for a trip
const getAllActivitiesForTrip = (trip_id) => {
  return db
    .query(
      `
      SELECT *
      FROM activities
      WHERE trip_id = $1;
    `,
      [trip_id]
    )
    .then((result) => {
      return result.rows;
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = { getAllActivities, getAllActivitiesForTrip };
