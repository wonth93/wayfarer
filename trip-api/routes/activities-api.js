const express = require("express");
const router = express.Router();
const db = require("../db/connection");
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

module.exports = router;
