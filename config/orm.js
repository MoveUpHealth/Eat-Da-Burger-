var connection = require("./connection.js");

const orm = {
    selectAll: function(tableName, cb){
        connection.query('SELECT * FROM ??',
         [tableName], 
         (err, data) => {
            if (err) throw err
            console.log(data)
            cb(data)
        })
    },
    insertOne: function(tableName, colOne, colTwo, valOne, valTwo, cb) {
        connection.query('INSERT INTO ?? ( ??, ?? ) VALUES (?,?)',
         [tableName, colOne, colTwo, valOne, valTwo], 
         (err, data) => {
            if (err) throw err
            console.log(data)
            cb(data)
        })
    },
    updateOne: function(tableName, updateCol, updateVal, conditionCol, conditionVal, cb) {
        connection.query('UPDATE ?? SET ?? = ? WHERE ?? = ?',
         [tableName, updateCol, updateVal, conditionCol, conditionVal], 
         (err, data) => {
            if (err) throw err
            console.log(data)
            cb(data)
        })
    },
}

// Object for all our SQL statement functions.
// var orm = {
//     all: function(tableInput, cb) {
//       var queryString = "SELECT * FROM " + tableInput + ";";
//       connection.query(queryString, function(err, result) {
//         if (err) {
//           throw err;
//         }
//         cb(result);
//       });
//     },
//     create: function(table, cols, vals, cb) {
//       var queryString = "INSERT INTO " + table;
  
//       queryString += " (";
//       queryString += cols.toString();
//       queryString += ") ";
//       queryString += "VALUES (";
//       queryString += printQuestionMarks(vals.length);
//       queryString += ") ";
  
//       console.log(queryString);
  
//       connection.query(queryString, vals, function(err, result) {
//         if (err) {
//           throw err;
//         }
  
//         cb(result);
//       });
//     },
//     // An example of objColVals would be {name: panther, sleepy: true}
//     update: function(table, objColVals, condition, cb) {
//       var queryString = "UPDATE " + table;
  
//       queryString += " SET ";
//       queryString += objToSql(objColVals);
//       queryString += " WHERE ";
//       queryString += condition;
  
//       console.log(queryString);
//       connection.query(queryString, function(err, result) {
//         if (err) {
//           throw err;
//         }
  
//         cb(result);
//       });
//     }
//   };
  
  // Export the orm object for the model (cat.js).
  module.exports = orm;