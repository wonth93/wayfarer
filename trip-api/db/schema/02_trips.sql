-- Drop old tables
DROP TABLE IF EXISTS trips CASCADE;

-- Create trips info table
CREATE TABLE trips (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  city VARCHAR(255) NOT NULL,
  country VARCHAR(255) NOT NULL,
  hotel_name VARCHAR(255) NOT NULL,
  hotel_address VARCHAR(255) NOT NULL,
  hotel_cost INTEGER NOT NULL DEFAULT 0,
  departure_flight_date VARCHAR(255) NOT NULL,
  departure_flight_time TIME NOT NULL,
  departure_flight_code VARCHAR(255) NOT NULL,
  return_flight_date VARCHAR(255) NOT NULL,
  return_flight_time TIME NOT NULL,
  return_flight_code VARCHAR(255) NOT NULL,
  flight_cost INTEGER NOT NULL DEFAULT 0,
  cover_photo_url VARCHAR(500) NOT NULL,
  active BOOLEAN DEFAULT TRUE
);