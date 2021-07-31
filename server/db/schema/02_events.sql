DROP TABLE IF EXISTS events CASCADE;

CREATE TABLE events (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50) NOT NULL,
  date DATE NOT NULL,
  address VARCHAR(255) NOT NULL,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL,
  --price in cents
  price int NOT NULL, 
  population int NOT NULL,
  description VARCHAR(255) NOT NULL,
  --host
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
 );