// importing libraries,routing and dependencies
const express = require('express');
const routes = require('./routes/main.js');

// postgres database connection
require('./config/database.js');

// defining server port
const port = process.env.PORT || 3000;

// initializing server and setting configurations
app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// importing routes to server
app.use(routes);

// port exposure and console logging wich port is open
console.log(`Server is running in port ${port}`);
app.listen(port);