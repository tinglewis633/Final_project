const db = require('../db');


const getAllEvents = () => {
  return db.query('SELECT * FROM events;')
    .then((response) => {
      return response.rows;
    });
};

const getEventById = (id) => {
  return db.query('SELECT * FROM events WHERE id = $1', [id])
    .then((response) => {
      return response.rows[0];
    })
}

//TO DO: Query for all events for a user

const getAllUserEvents = (id) => {
  return db.query('SELECT events.* FROM events WHERE id = $1', [id])
    .then((response) => {
      return response.rows[0];
    })
}


module.exports = { getAllEvents, getEventById, getAllUserEvents };