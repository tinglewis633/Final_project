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

//Users Route
router.get("/user/:id", (req, res) => {
  userQuery.getUserById(req.params.id).then((response) => {
    res.json(response);
  });
});


module.exports = router;
