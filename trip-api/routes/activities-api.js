const express = require("express");
const router = express.Router();
const activityQueries = require("../db/queries/activityQueries");

// Show all trips - to test if the database is connect to the server
router.get("/", (req, res) => {
  activityQueries
    .getAllActivities()
    .then((activities) => {
      res.json({ activities });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// Get all activities for trip
router.get("/:trip_id", (req, res) => {
  const { trip_id } = req.params;

  activityQueries
    .getAllActivitiesForTrip(trip_id)
    .then((activities) => {
      res.json(activities);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/add", (req, res) => {
  const {
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
  } = req.body;

  activityQueries
    .addActivity(
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
    )
    .then((activities) => {
      //console.log("trips", trips);
      res.json({ activities });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.post("/:id/delete", (req, res) => {
  const activity_id = req.body.activity_id;
  
  activityQueries
    .deleteActivity(activity_id)
    .then((activities) => {
      //console.log("trips", trips);
      res.json({ activities });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
})

module.exports = router;
