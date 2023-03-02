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

module.exports = router;
