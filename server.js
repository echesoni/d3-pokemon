const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// Configure the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connect to the database
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log("Successfully connected to the database");
}).catch(err => {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

// console.log(db.Pokemon);

// define route
app.get('/', (req, res) => {
  res.json({"message": "route is working!"});
});

// api routes
require('./app/routes/pokemon.routes.js')(app);

// listen for requests
app.listen(port, () => {
  console.log(`Magic is happening at localhost:${port}`);
})
