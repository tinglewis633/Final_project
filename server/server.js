require("dotenv").config();

const express = require("express");
const app = express();

const morgan = require("morgan");
const cors = require("cors");

app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.statusCode === 200
    ? res.send({ "Api Status": "ON" })
    : res.send({ "Api Status": "OFF" });
});

// ----------- Testing route when db is not working------------------
// const data = [
//   { name: "wergre", id: 1 },
//   { name: "ewrgew", id: 2 },
//   { name: "abcwgregwed", id: 3 },
// ];

// app.get("/api/data", (req, res) => {
//   res.json({ data: data });
// });

const apiRoutes = require("./routes/api");
const authRoutes = require("./routes/auth");
app.use("/", authRoutes);
app.use("/api", apiRoutes);

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

// router.post("/login", (req, res) => {
//   console.log("JHIIIIIIIIII");
//   res.redirect("/123");
// });

// router.get("/login", (req, res) => {
//   console.log("JHIIIIIIIIII");
//   res.redirect("/123");
// });

app.listen(process.env.PORT, () =>
  console.log(`> Api ready @ http://localhost:${process.env.PORT}`)
);
