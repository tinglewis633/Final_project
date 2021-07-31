const express = require("express");
const router = express.Router();
const customersQueries = require("../db/queries/customer-queries");

//DB test
router.get("/customers", (req, res) => {
  customersQueries.getAllCustomers().then((response) => {
    res.json(response);
  });
});

module.exports = router;
