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
    console.log(handlebarsObject);
    res.render('index', handlebarsObject);
  });
});

// Create a New Burger
router.post('/api/burgers', function (req, res)
{
  burger.insertOne([req.body.burger_name, req.body.devoured],
    function(result)
  {
    res.redirect('/');
  });
});

// Devour a Burger
router.post('/api/burgers/:id', function (req, res)
{
  burger.updateOne(req.params.id, function()
  {
    res.redirect('/');
  });
});


//DELETE route to throw away a burger.
router.delete("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
