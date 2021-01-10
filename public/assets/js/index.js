// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".eat-btn").on("click", function(event) {
      var id = $(this).data("id");
      var isEaten = 1;
  
      var devouredState = {
        devoured: isEaten
      };
  
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredState
      }).then(
        function() {
          console.log("changed devoured to", isEaten);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".add-btn").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger_name").val().trim(),
        devoured: false
      };
  
      // Send the POST request.
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
  });
  