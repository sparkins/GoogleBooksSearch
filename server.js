// Dependencies
const express = require("express");
const path = require("path");
var mongojs = require("mongojs");
var logger = require("morgan");
var bodyParser = require('body-parser');

const PORT = process.env.PORT || 3001;
const app = express();

// Set the app up with morgan
app.use(logger("dev"));

// set the app up with bodyparser
app.use(bodyParser());

// Database configuration
var databaseUrl = process.env.MONGODB_URI || "googlebooks_db";
var collections = ["books"];

// Hook mongojs config to db variable
var db = mongojs(databaseUrl , collections);

// Log any mongojs errors to console
db.on("error", function(error) {
  console.log("Database Error:", error);
});

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
