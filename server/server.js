const PORT = 3002;
const express = require("express");

const app = express();

const data = [
  { name: "wergre", id: 1 },
  { name: "ewrgew", id: 2 },
  { name: "abcwgregwed", id: 3 },
];

app.get("/api/data", (req, res) => {
  res.json({ data: data });
});

app.listen(PORT, () => console.log(`SERVER IS RUNNING ON ${PORT}`));
