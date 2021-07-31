const express = require('express');
const router = express.Router();
const customersQueries = require('../db/queries/customer-queries');

const data = [
  { name: "wergre", id: 1 },
  { name: "ewrgew", id: 2 },
  { name: "abcwgregwed", id: 3 },
];

// router.get("/data", (req, res) => {
//   res.json({ data: data });
// });

//DB test
router.get("/customers", (req, res) => {
  customersQueries.getAllCustomers()
    .then((response) => {
      res.json(response);
    })
});

module.exports = router;