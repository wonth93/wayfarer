const express = require("express");
const router = express.Router();
const tripQueries = require("../db/queries/tripQueries");

// Show all trips - to test if the database is connect to the server
router.get("/", (req, res) => {
  tripQueries
    .getAllTrips()
    .then((trips) => {
      res.json({ trips });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

// Get all trips for user
router.get("/myTrips", (req, res) => {
  const user_id = req.cookies.user_id;

  tripQueries
    .getAllTripsForUser(user_id)
    .then((trips) => {
      res.send({ trips });
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

// Edit Tirp
router.post(":id/edit", (req, res) => {
  const {
    trip_id,
    city,
    country,
    hotel_name,
    hotel_address,
    hotel_cost,
    departure_flight_date,
    departure_flight_time,
    departure_flight_code,
    return_flight_date,
    return_flight_time,
    return_flight_code,
    flight_cost,
    cover_photo_url,
    user_id
  } = req.body;

  tripQueries
    .editTrip(
      trip_id,
      city,
      country,
      hotel_name,
      hotel_address,
      hotel_cost,
      departure_flight_date,
      departure_flight_time,
      departure_flight_code,
      return_flight_date,
      return_flight_time,
      return_flight_code,
      flight_cost,
      cover_photo_url,
      user_id)
    .then((trip) => {
      res.json({ trip });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
})

// Delete trip
router.post("/:id/delete", (req, res) => {
  const trip_id = req.body.trip_id;

  tripQueries
    .deleteTrip(trip_id)
    .then((trip) => {
      res.json({ trip });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
})

// Add trip
router.post("/add", (req, res) => {
  const {
    user_id,
    city,
    country,
    hotel_name,
    hotel_address,
    hotel_cost,
    departure_flight_date,
    departure_flight_time,
    departure_flight_code,
    return_flight_date,
    return_flight_time,
    return_flight_code,
    flight_cost,
    cover_photo_url
  } = req.body;

  tripQueries
    .addTrip(
      user_id,
      city,
      country,
      hotel_name,
      hotel_address,
      hotel_cost,
      departure_flight_date,
      departure_flight_time,
      departure_flight_code,
      return_flight_date,
      return_flight_time,
      return_flight_code,
      flight_cost,
      cover_photo_url
    )
    .then((trip) => {
      res.json({ trip });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
})

module.exports = router;
