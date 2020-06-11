const { Pool, Client } = require("pg");
const connectionUri = "postgres://postgres:ZTJmMzhlYmFhOWJjZjQ0@0.0.0.0:5432";

const pool = new Pool({
  connectionString: connectionUri,
});

pool.query("SELECT NOW()", (err, res) => {
  console.log(err, res);
  pool.end();
});