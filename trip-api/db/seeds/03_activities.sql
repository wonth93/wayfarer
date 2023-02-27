--DELETE OLD DATA
DELETE FROM activities;

INSERT INTO activities (user_id, trip_id, activity_name, activity_address, lat, long, activity_cost, activity_date, activity_time, activity_type)
VALUES (1, 1, 'Science World', '1455 Quebec St, Vancouver, BC, Canada', 49.2734, -123.1035, 50, '2023-3-20', '13:00:00', 'museum')