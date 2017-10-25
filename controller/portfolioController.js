//express server
var express = require("express");

//express router ---> CRUD
var router = express.Router();

/*
  ROUTES
*/

//home page
router.get("/", function(req, res){
  res.render("index", {});
});

//about me
router.get("/about", function(req, res){
  res.render("about", {});
});

//projects
router.get("/projects", function(req, res){
  res.render("portfolio", {});
});

//contact
router.get("/contact", function(req, res){
  res.render("contact", {});
});

module.exports = router;
