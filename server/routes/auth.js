const express = require("express");
const router = express.Router();
const userQuery = require("../db/queries/users-queries");
const bcrypt = require("bcrypt");

//Authenticate User
router.post("/login", (req, res) => {
  const Username = req.body.username;
  const Password = req.body.password;
  userQuery.findUserByUsername(Username).then((user) => {
    if (user) {
      
      res.json(user);

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
// router.post("/logister", (req, res) => {
//   const logUsername = req.body.username
//   const logPassword = req.body.password;
//   dbHelpers.findUserByUsername(logUsername)
//     .then((user) => {
//       if (!user) {
//         res.json("invalid user")
//       } else {
//         if (bcrypt.compareSync(logPassword, user.password)) {
//           req.session.user_id = user.id;
//           res.redirect("/");
//         } else {
//           res.json("wrong password")
//         }
//       }
//     })
//     .catch((error) => res.json(error));

// })

module.exports = router;
