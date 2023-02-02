const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Type in your password
  password: " ",
  database: "company_db"
});

connection.connect(function (err) {
  if (err) throw err;
});

module.exports = connection;