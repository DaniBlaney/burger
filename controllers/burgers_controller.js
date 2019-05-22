var express = require('express');
var router = express.Router();
var burger = require('../models/burger.js');

//Setup Routes
//------------------------------------------------

// Index Redirect
router.get('/', function (req, res)
{
  res.redirect('/');
});

// Index Page
router.get('/', function (req, res)
{
  burger.selectAll(function(data)
  {
    var handlebarsObject = { burgers: data };
    //console.log(hbsObject);
    res.render('index', handlebarsObject);
  });
});

// Create a New Burger
router.post('/burger/create', function (req, res)
{
  burger.insertOne(req.body.burger_name, function()
  {
    res.redirect('/');
  });
});
