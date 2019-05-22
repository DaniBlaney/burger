//Require mysql npm package to create a connection to the mysql database.
var mysql = require("mysql");

//Read and set any environment variables with the dotenv package.
require("dotenv").config();

//MySQL password is passed into connection.js from the .env file using the dotenv npm package.
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "4MySQL32!",
  database: "burger_db"
});

