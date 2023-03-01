--DELETE OLD DATA
DELETE FROM trips;

--Create trip info data
INSERT INTO trips (user_id, city, country, hotel_name, hotel_address, hotel_cost, departure_flight_date, departure_flight_time, departure_flight_code, return_flight_date, return_flight_time, return_flight_code, flight_cost, cover_photo_url, active)
VALUES (1, 'Vancouver', 'Canada', 'Fairmont Waterfront', '900 Canada Pl, Vancouver, BC V6C 3L5', 1500, '2023-03-19', '01:00:00', 'AC20', '2023-03-25', '02:00:00', 'AC22', 1000, 'https://images.unsplash.com/photo-1560814304-4f05b62af116?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80', true),
(1, 'Tokyo', 'Japan', 'JW Marriott', '4 Chome736 Kitashinagawa City, Tokyo', 2500, '2022-02-10', '12:00:00', 'NH23', '2022-02-25', '07:00:00', 'NH02', 2000, 'https://images.unsplash.com/photo-1560814304-4f05b62af116?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80', true);