// const PORT = 3002;
require('dotenv').config();

const express = require("express");
const app = express();

const morgan = require('morgan');
const cors = require("cors");

app.use(cors());
app.use(morgan('dev'));


app.get("/", (req, res) => {
  res.statusCode === 200 ? res.send({ "Api Status" : "ON" }) : res.send({ "Api Status" : "OFF" });
});

const apiRoutes = require("./routes/api");
app.use("/api", apiRoutes);

app.listen(process.env.PORT, () => console.log(`> Api ready @ http://localhost:${process.env.PORT}`));
