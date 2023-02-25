-- Drop old tables
DROP TABLE IF EXISTS activities CASCADE;

-- Create car info table
CREATE TABLE activities (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  trip_id INTEGER REFERENCES trips(id) ON DELETE CASCADE,
  activity_name VARCHAR(255) NOT NULL,
  activity_address VARCHAR(255) NOT NULL,
  lat DECIMAL(8,6)
  long DECIMAL(9,6)
  activity_cost INTEGER NOT NULL DEFAULT 0,
  activity_date DATE NOT NULL,
  activity_time TIME NOT NULL,
  activity_type VARCHAR(255) NOT NULL
);