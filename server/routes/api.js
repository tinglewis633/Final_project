const express = require("express");
const router = express.Router();
const customersQueries = require("../db/queries/customer-queries");
const eventQuery = require("../db/queries/events-queries");
const userQuery = require("../db/queries/users-queries");

//DB test
router.get("/customers", (req, res) => {
  customersQueries.getAllCustomers().then((response) => {
    res.json(response);
  });
});

//Events Route

//get all events from DB
router.get("/events", (req, res) => {
  eventQuery.getAllEvents().then((response) => {
    res.json(response);
  });
});

//gets an event by id
router.get("/event/:id", (req, res) => {
  eventQuery.getEventById(req.params.id).then((response) => {
    res.json(response);
  });
});

//TODO: gets all evants for a user
router.get("/user/events", (req, res) => {
  eventQuery.getAllUserEvents(req.params.id).then((response) => {
    res.json(response);
  });
});


//Users Route
router.get("/user/:id", (req, res) => {
  userQuery.getUserById(req.params.id).then((response) => {
    res.json(response);
  });
});

router.get("/logged_in", (req, res) => {
  if (req.session.user_id) {
    userQuery.getUserById(req.session.user_id).then((response) => {
      response.logged_in = true;
      res.json(response);
    });
  } else {
    res.json({ logged_in: false });
  }
});

module.exports = router;
