const express = require("express");
const router = express.Router();
const customersQueries = require("../db/queries/customer-queries");
const eventQuery = require("../db/queries/events-queries");
const userQuery = require("../db/queries/users-queries");

//Users Route
// router.get("/user/:id", (req, res) => {
//   userQuery.getUserById(req.params.id).then((response) => {
//     res.json(response);
//   });
// });

router.post("/login", (req, res) => {
  const logUsername = req.body.username;
  const logPassword = req.body.password;
  console.log("JHIIIIIIIIII");
  console.log(logUsername);
  console.log(logPassword);
  res.redirect("/123");
});

module.exports = router;
