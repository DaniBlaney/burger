// require orm.js into burger.js
var orm = require('../config/orm.js');

// create the code that will call the ORM functions using burger specific input for the ORM.
var burger = {

  all: function(callback){
    orm.all("burgers", function(res)
    {
      callback(res);
    });
  },

  create: function(burger_name, devoured,  callback){
    orm.create(burger_name, devoured, function(res)
    {
      callback(res);
    });
  },
  update: function(devoured,burgerID, callback){
    orm.update(devoured, burgerID, function(res)
    {
      console.log("From burger.js");
      console.log(res);
      callback(res);
    });
  },

  delete: function(id, callback){
    orm.delete(id, function(res)
    {
      callback(res);
    });
  },

 };


// Export at the end of the burger.js file.
module.exports = burger;
