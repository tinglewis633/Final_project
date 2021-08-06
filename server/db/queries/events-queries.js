const db = require("../db");

const getAllEvents = () => {
  return db.query("SELECT * FROM events;").then((response) => {
    return response.rows;
  });
};

const getEventById = (id) => {
  return db
    .query("SELECT * FROM events WHERE id = $1", [id])
    .then((response) => {
      return response.rows[0];
    });
};

const addEvent = function (
  name,
  date,
  address,
  start_time,
  end_time,
  price,
  population,
  description,
  eventPrivate,
  ageRange,
  host_id
) {
  const stringQuery = ` INSERT INTO events (name, date, address, start_time, end_time, price, population, description, eventPrivate, ageRange, host_id) 
VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11);
  `;
  return db
    .query(stringQuery, [
      name,
      date,
      address,
      start_time,
      end_time,
      price,
      population,
      description,
      eventPrivate,
      ageRange,
      host_id,
    ])
    .then((response) => response);
};

//TO DO: Query for all events for a user
const getAllUserEvents = (id) => {
  return db
    .query("SELECT * FROM events WHERE host_id = $1", [id])
    .then((response) => {
      return response.rows;
    });
};

const addEventRequest = function (user_id, events_id, accepted) {
  const stringQuery = ` INSERT INTO events (user_id, events_id, accepted) 
VALUES($1, $2, $3);

  `;
  return db
    .query(stringQuery, [user_id, events_id, accepted])
    .then((response) => response);
};

module.exports = {
  getAllEvents,
  getEventById,
  getAllUserEvents,
  addEvent,
  addEventRequest,
};
