const express = require("express");
const router = express.Router();
const db = require("../db/connection");
const tripQueries = require("../db/queries/database");

// Get all trips for user
router.get("/myTrips", (req, res) => {
  const user_id = req.cookies.user_id;

  tripQueries
    .getMyTrips(user_id)
    .then((cars) => {
      res.send({ cars });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// Get single trip info
router.get("/:id", (req, res) => {
  const { id } = req.params;

  tripQueries
    .getSingleTrip(id)
    .then((trip) => {
      res.json(trip);
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
