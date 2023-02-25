-- Delete old users data
DELETE FROM users;

-- Create users data
INSERT INTO users (name, email)
VALUES ('Bob', 'admin@gmail.com');
