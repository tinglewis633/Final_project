DROP TABLE IF EXISTS events CASCADE;

CREATE TABLE events (
  id SERIAL PRIMARY KEY NOT NULL,
  event_name VARCHAR(50) NOT NULL,
  date DATE NOT NULL,
  address VARCHAR(255) NOT NULL,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL,
  --price in cents
  price NUMERIC(10,2) NOT NULL, 
  population int NOT NULL,
  description VARCHAR(255) NOT NULL,
  eventPrivate BOOLEAN,
  ageRange VARCHAR(50) NOT NULL,
  host_id INTEGER REFERENCES users(id) ON DELETE CASCADE
 );