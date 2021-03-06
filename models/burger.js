// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(colOne, colTwo, valOne, valTwo, cb) {
    orm.insertOne("burgers", colOne, colTwo, valOne, valTwo, function(res) {
      cb(res);
    });
  },
  update: function(updateCol, updateVal, conditionCol, conditionVal, cb) {
    orm.updateOne("burgers", updateCol, updateVal, conditionCol, conditionVal, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;