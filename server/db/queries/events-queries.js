const db = require("../db");

const getAllEvents = () => {
  return db
    .query(
      "SELECT events.*, name FROM events JOIN users ON host_id = users.id;"
    )
    .then((response) => {
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

const editEvent = function (
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
  event_id
) {
  const stringQuery = ` UPDATE events
  SET event_name = $1,
   date = $2,
   address = $3,
   start_time = $4,
   end_time = $5,
   price = $6,
   population = $7,
   description = $8,
   eventPrivate = $9,
   ageRange = $10,
   host_id = $11
  WHERE id = $12;
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
      event_id,
    ])
    .then((response) => response);
};

//Query for all events for a user
const getAllUserOwnedEvents = (id) => {
  return db
    .query("SELECT * FROM events WHERE host_id = $1", [id])
    .then((response) => {
      return response.rows;
    });
};

const addEventRequest = function (user_id, events_id, accepted) {
  const stringQuery = ` 

  
  INSERT INTO events_users (user_id, events_id, accepted) 
  VALUES($1, $2, $3);

  `;
  return db
    .query(stringQuery, [user_id, events_id, accepted])
    .then((response) => response);
};

const getAllRequestsForHost = (host_id) => {
  return db
    .query(
      "SELECT events_users.*, event_name, host_id, accepted, name FROM events_users JOIN events ON events_id = events.id JOIN users ON user_id = users.id WHERE host_id = $1;",
      [host_id]
    )
    .then((response) => {
      return response.rows;
    });
};

const getAllUserAcceptedEvents = (id) => {
  return db
    .query(
      "SELECT events_users.*, events.*, host_id, accepted, name FROM events_users JOIN events ON events_id = events.id JOIN users ON user_id = users.id WHERE user_id = $1 AND accepted = true;",
      [id]
    )
    .then((response) => {
      return response.rows;
    });
};

const acceptRequest = function (id) {
  const stringQuery = ` UPDATE events_users
  SET accepted = true
  WHERE id = $1;
  `;
  return db.query(stringQuery, [id]).then((response) => response);
};

const declineRequest = function (id) {
  console.log("DECLINEREQUEST");
  const stringQuery = `    
  DELETE FROM events_users
  WHERE id = $1;
  `;
  return db.query(stringQuery, [id]).then((response) => response);
};

const deleteEvent = function (id) {

  const stringQuery = `    
  DELETE FROM events
  WHERE id = $1;
  `;
  return db.query(stringQuery, [id]).then((response) => response);
};


module.exports = {
  getAllEvents,
  getEventById,
  getAllUserOwnedEvents,
  addEvent,
  addEventRequest,
  getAllTest,
  getAllRequestsForHost,
  acceptRequest,
  declineRequest,
  getAllUserAcceptedEvents,
  editEvent,
  deleteEvent,
};
