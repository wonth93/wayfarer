--DELETE OLD DATA
DELETE FROM trips;

--Create trip info data
INSERT INTO trips (user_id, city, country, hotel_name, hotel_address, hotel_cost, departure_flight_date, departure_flight_time, departure_flight_code, return_flight_date, return_flight_time, return_flight_code, flight_cost, cover_photo_url, active)
VALUES (1, 'Vancouver', 'Canada', 'Fairmont Waterfront', '900 Canada Pl, Vancouver, BC V6C 3L5', 1500, '2023-03-19', '01:00:00', 'AC20', '2023-03-25', '02:00:00', 'AC22', 1000, 'https://images.unsplash.com/photo-1560814304-4f05b62af116?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80', true),
(1, 'Tokyo', 'Japan', 'JW Marriott', '4 Chome736 Kitashinagawa City, Tokyo', 2500, '2022-02-10', '12:00:00', 'NH23', '2022-02-25', '07:00:00', 'NH02', 2000, 'https://images.unsplash.com/photo-1554797589-7241bb691973?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80', true),
(1, 'London', 'United Kingdom', 'The Savoy Hotel', 'Strand, London, WC2R 0EZ', 9000, '2014-04-02', '16:00:00', 'CX05', '2014-04-25', '10:00:00', 'CX12', 1300, 'https://lh3.googleusercontent.com/p/AF1QipMB206l-33cM3n4UlK5lE-LBYdPUhy8-45c-0c=w296-h202-n-k-no-v1-rj', true);