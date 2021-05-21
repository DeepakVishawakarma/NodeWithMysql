const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;
const taskRoutes = require("./routes/tasks");

app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json

app.use("/api", taskRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
