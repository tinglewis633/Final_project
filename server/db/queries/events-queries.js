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
  return db.query('SELECT * FROM events JOIN users ON host_id = users.id WHERE host_id = $1', [id])
    .then((response) => {
      return response.rows;
    })
}


module.exports = { getAllEvents, getEventById, getAllUserEvents };