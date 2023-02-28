const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const activityQueries = require("../db/queries/database");

// Show all trips - to test if the database is connect to the server
router.get("/", (req, res) => {
  db.query(`SELECT * FROM activities;`)
    .then((activities) => {
      res.json(activities.rows);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    })
});

module.exports = router;
