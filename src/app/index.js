// importing libraries,routing and dependencies
const express = require('express');
const routes = require('./routes/main.js');
const bodyParser = require('body-parser');
// postgres database connection
require('./config/database.js');

// defining server port
const port = process.env.PORT || 3000;

// initializing server and setting configurations
app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));

// importing routes to server
app.use(routes);

// port exposure and console logging wich port is open
console.log(`Server is running in port ${port}`);
app.listen(port);