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

const addActivity = (
  user_id,
  trip_id,
  activity_name,
  activity_address,
  lat,
  long,
  activity_cost,
  activity_date,
  activity_time,
  activity_type
) => {
  return db
    .query(
      `INSERT INTO activities (user_id, trip_id, activity_name, activity_address, lat, long, activity_cost, activity_date, activity_time, activity_type) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;`,
      [
        user_id,
        trip_id,
        activity_name,
        activity_address,
        lat,
        long,
        activity_cost,
        activity_date,
        activity_time,
        activity_type,
      ]
    )
    .then((res) => {
      console.log("res.rows", res.rows);
      return res.rows;
    })
    .catch((err) => {
      console.log("DB error adding trip: " + err.message);
    });
};

// Delete an activity

const deleteActivity = (activityId) => {
  return db
    .query(`DELETE FROM activities WHERE id =$1`, [activityId])
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

module.exports = { getAllActivities, getAllActivitiesForTrip, addActivity, deleteActivity };
