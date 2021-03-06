$(function() {
  //Click event for adding a burger.
  $(".submit_btn").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      //When user submits burger name, set devoured state to false.
      var newBurger = {
      burger_name: $("#burgerOrder").val().trim(),
      devoured: 0
      };

      // Send the POST request using ajax.
      $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
      }).then(
      function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
      }
      );
  });

  //Click event to throw away/delete burger.
  $(".delete-burger").on("click", function(event) {
      var id = $(this).attr("data-id");

      // Send the DELETE request using ajax.
      $.ajax("/api/burgers/" + id, {
        type: "DELETE",
      }).then(
        function() {
          console.log("deleted burger", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  //Click event for "Devour me" button.
  $(".change-devour").on("click", function(event) {
      var id = $(this).attr("data-id");
      var newDevour = $(this).attr("data-newdevour");

      var newDevourState = {
        devoured: "true"
      };
console.log(id);
console.log(newDevourState);
      // Send the PUT request using ajax.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
