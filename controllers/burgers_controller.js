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
router.get('/index', function (req, res)
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

// Devour a Burger
router.post('/burger/eat/:id', function (req, res)
{
  burger.updateOne(req.params.id, function()
  {
    res.redirect('/index');
  });
});
