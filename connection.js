const mysql = require("mysql2");
const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo",
  insecureAuth: true,
});

mysqlConnection.connect(function (err) {
  if (err) {
    console.log("connection failed", err);
    return;
  }
  console.log("connection successful");
});

module.exports = mysqlConnection;
