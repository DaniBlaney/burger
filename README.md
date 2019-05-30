# Eat the Burger :hamburger:

A burger logger with MySQL, Node, Express, Handlebars and a homemade ORM (yum!). Uses Node and MySQL to query and route data in your app, and Handlebars to generate HTML.

https://bobzburgers.herokuapp.com/

## How it works:

* Bob's Burgers! is an app that lets users input the names of burgers they'd like to eat.

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page -- waiting to be devoured.

* Each burger in the waiting area also has a `Devour it!` button. When the user clicks it, the burger will move to the right side of the page.

* From there the burger can be `Throw away` and deleted.

* The app will store every burger in a database, whether devoured or not.
