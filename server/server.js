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
app.use("/api", apiRoutes);

app.listen(process.env.PORT, () =>
  console.log(`> Api ready @ http://localhost:${process.env.PORT}`)
);
