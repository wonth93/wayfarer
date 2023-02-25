--DELETE OLD DATA
DELETE FROM trips;

--Create trip info data
INSERT INTO trips (user_id, city, country, hotel_name, hotel_address, hotel_cost, departure_flight_date, departure_flight_time, departure_flight_code, return_flight_date, return_flight_time, return_flight_code, flight_cost, cover_photo_url, active)
VALUES 