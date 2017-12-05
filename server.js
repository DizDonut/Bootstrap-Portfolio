// Dependencies
var express = require("express");
var port = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Make public a static dir
app.use(express.static("public"));

// Set handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controller/portfolioController.js");
app.use("/", routes);

// Listen on port 3000
app.listen(port, function() {
  console.log(`App running on port ${port}`);
});
