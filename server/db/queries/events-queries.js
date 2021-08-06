const db = require("../db");

const getAllEvents = () => {
  return db.query("SELECT * FROM events;").then((response) => {
    return response.rows;
  });
};

const getAllTest = () => {
  return db.query("SELECT * FROM events_users;").then((response) => {
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
  const stringQuery = ` INSERT INTO events (event_name, date, address, start_time, end_time, price, population, description, eventPrivate, ageRange, host_id) 
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

//Query for all events for a user
const getAllUserEvents = (id) => {
  return db
    .query("SELECT * FROM events WHERE host_id = $1", [id])
    .then((response) => {
      return response.rows;
    });
};

const addEventRequest = function (user_id, events_id, accepted) {
  const stringQuery = ` INSERT INTO events_users (user_id, events_id, accepted) 
VALUES($1, $2, $3);

  `;
  return db
    .query(stringQuery, [user_id, events_id, accepted])
    .then((response) => response);
};

const getAllRequestsForHost = (host_id) => {
  return db
    .query("SELECT events_users.*, event_name, host_id, accepted, name FROM events_users JOIN events ON events_id = events.id JOIN users ON user_id = users.id WHERE host_id = $1;", [host_id])
    .then((response) => {
      return response.rows;
    });
};

const acceptRequest= function (id) {
  const stringQuery = ` UPDATE events_users
  SET accepted = true
  WHERE id = $1;
  `
  return db
    .query(stringQuery, [id])
    .then((response) => response);
};
// UPDATE courses
// SET published_date = '2020-08-01' 
// WHERE course_id = 3;

module.exports = {
  getAllEvents,
  getEventById,
  getAllUserEvents,
  addEvent,
  addEventRequest,
  getAllTest,
  getAllRequestsForHost,
  acceptRequest
};
