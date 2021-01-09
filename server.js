// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require('mysql')


// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "*117Rica",
    database: "burgers_db"
  });
  
  // Initiate MySQL Connection.
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded({ extended: true}));
app.use(express.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
    connection.query('SELECT * FROM burgers', (err, result) => {
        if (err) throw err
        res.render('index', {burgers: result})
    })
    
})

app.post("/", function(req, res) {
    // Test it.
    console.log(req.body);
  
    // Test it.
    // res.send('You sent, ' + req.body.wish)
  
    connection.query("INSERT INTO burgers (burger) VALUES (?)", [req.body.burger], function(err, result) {
      if (err) {
        throw err;
      }
  
      res.redirect("/");
    });
  });



// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });