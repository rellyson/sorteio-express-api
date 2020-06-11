// importing libraries,routing and dependencies
const express = require('express');
const routes = require('./src/routes/main.js');
const pg = require('pg');

// postgres database connection
require('./src/config/database.js');

// defining server port
const port = process.env.PORT || 3000;

// initializing server
app = express();

// importing routes to server
app.use(routes);

// port exposure and logging wich port is open
console.log(`Server is running in port ${port}`);
app.listen(port);