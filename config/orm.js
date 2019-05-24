//require connection.js so the ORM can communicate with the database.
var connection = require("./connection.js");

var orm = {

	//selectAll()

	all: function(table_name, callback){
		//mySQL Query
    connection.query('SELECT * FROM ' + table_name,
    function(err, result)
		{
			if (err) throw err;
      // console.log(result);
      callback(result);
		});
	},

	//insertOne()
	create: function(burger_name, devoured, callback){
		connection.query(
      'INSERT INTO burgers SET ?',
			{	burger_name: burger_name,
				devoured: false,
      },
      function(err, result)
			{
				if (err) throw err;
				callback(result);
			});

	},

	//updateOne()
	update: function(devoured, burgerID, callback){
   	connection.query(
      'UPDATE burgers SET ? WHERE ?',
      [{devoured: true}, {id: burgerID}],
			function(err, result)
			{
        if (err) throw err;
   			callback(result);
			});
  },
  delete: function(burgerID, callback){
    connection.query(
      'DELETE FROM burgers WHERE id = '+burgerID,
      function(err, result){
        if (err) throw err;
        callback(result);
      });
  },
};


// Export the ORM object in module.exports.
module.exports = orm;
