const express = require("express");
const router = express.Router();
const userQuery = require("../db/queries/users-queries");
const bcrypt = require("bcrypt");

//Authenticate User
router.post("/login", (req, res) => {
  const Username = req.body.username;
  const Password = req.body.password;
  userQuery.findUserByUsername(Username).then((user) => {
    if (!user) {

      res.json("User not found");
    } else if (bcrypt.compareSync(Password, user.password)) {
      req.session.user_id = user.id;
      res.redirect("/");
    } else {
      res.json("invalid credentials");
    }
  });
});

// create User
router.post("/register", (req, res) => {
  const Username = req.body.username;
  const Password = bcrypt.hashSync(req.body.password, 10);
  const Email = req.body.email;
  const date_of_birth = req.body.date_of_birth;
  userQuery.findUserByUsername(Username).then((user) => {
    if (!user) {
      userQuery
        .createUser(Username, Password, Email, date_of_birth)
        .then((user) => {
          req.session.user_id = user.id;
          res.redirect("/");
        })
        .catch((error) => res.json(error));
    } else {
      res.json("User already exists");
    }
  });
});

//logout User
router.post("/logout", (req, res) => {
  req.session = null;
  res.redirect("/");
});

// redirect user to / if logged in
router.get("/login", (req, res) => {
  if (!req.session.user_id) {
    res.redirect("/");
  }
});

module.exports = router;
