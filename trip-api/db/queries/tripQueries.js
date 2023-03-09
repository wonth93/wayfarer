const db = require("../connection");

// Get all trips
const getAllTrips = () => {
  return db
    .query(`SELECT * FROM trips ORDER BY departure_flight_date DESC;`)
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
      FROM trips
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

// Add a trip

const addTrip = (
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
) => {
  return db
    .query(
      `INSERT INTO trips (user_id, city, country, hotel_name, hotel_address, hotel_cost, departure_flight_date, departure_flight_time, departure_flight_code, return_flight_date, return_flight_time, return_flight_code, flight_cost, cover_photo_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14) RETURNING *;`,
      [
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
      ]
    )
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// Edit Trip
const editTrip = (
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
) => {
  return db
    .query(
      `
      UPDATE trips
      SET
      city = $2,
      country = $3,
      hotel_name = $4,
      hotel_address = $5,
      hotel_cost = $6,
      departure_flight_date = $7,
      departure_flight_time = $8,
      departure_flight_code = $9,
      return_flight_date = $10,
      return_flight_time = $11,
      return_flight_code = $12,
      flight_cost = $13,
      cover_photo_url = $14,
      user_id = $15
      WHERE trips.id = $1
      RETURNING *;`,
      [
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
      ]
    )
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

// Delete a trip

const deleteTrip = (tripId) => {
  return db
    .query(`DELETE FROM trips WHERE id = $1 RETURNING id;`, [tripId])
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

module.exports = {
  getAllTrips,
  getAllTripsForUser,
  getSingleTrip,
  addTrip,
  deleteTrip,
  editTrip,
};
