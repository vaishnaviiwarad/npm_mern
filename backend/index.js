const express = require("express");
const app = express();
const b=1
console.log(a)

app.get("/", (req, res) => {
  res.send("Backend running successfully!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
