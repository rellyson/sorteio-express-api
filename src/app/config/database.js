//import dependencies
const { Pool } = require("pg");

//seeding database
require("./seed.js");

//database connection URL
const connectionUri =
  "postgres://postgres:ZTJmMzhlYmFhOWJjZjQ0@0.0.0.0:5432/sorteio";

//creating connection
const pool = new Pool({
  connectionString: connectionUri,
});

// database connection promise
pool
  .query("SELECT NOW() as now")
  .then((res) => console.log("connected to database sorteio"))
  .catch((e) => console.error(e.stack));

//export pool query module to be mounted in route main.js
module.exports = {
  query: (text, params) => pool.query(text, params),
};
