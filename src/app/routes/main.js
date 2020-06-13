const Router = require("express-promise-router");
const db = require("../config/database.js");

const router = new Router();

router.get("/", (req, res) => {
  res.send("It works! :D");
});

router.get("/listCandidates", async (req, res) => {
    const { rows } = await db.query('SELECT * from candidates')
    res.send(rows);
});

router.get('/listCandidateById', async (req, res) => {
    const { id } = req.body
    const { rows } = await db.query('SELECT * FROM candidates WHERE id = $1', [id])
    res.send(rows[0])
  });

router.post("/insertCandidate", async (req, res) => {
    const { first_name,last_name, email } = req.body
    const { rows } = await db.query('INSERT INTO candidates(first_name, last_name, email) VALUES ($1, $2,$3)', [first_name, last_name, email])
    res.send(rows[0]);
});

router.post("/removeCandidate", async (req, res) => {
    const { first_name,last_name } = req.body
    const { rows } = await db.query('DELETE FROM candidates WHERE first_name=$1 AND last_name=$2', [first_name, last_name])
    res.send(rows);
});

router.patch("/updateCandidate", async (req, res) => {
    const { id,first_name,last_name, email } = req.body
    const { rows } = await db.query('UPDATE candidates SET first_name=$2, last_name=$3, email=$4 WHERE id=$1', [id,first_name,last_name, email])
    res.send(rows);
});

router.get("/sortCandidate", async (req, res) => {
    const { rows } = await db.query('SELECT COUNT(id) FROM candidates');
    const min = 1;
    const candidates = rows[0]["count"];
    if(candidates >= 1){  
        const random = Math.floor(Math.random() * (candidates - min +1) + min);
        const { rows } = await db.query('SELECT * FROM candidates WHERE id = $1', [random]);
        res.send(rows[0]);
    }
    else{
        res.send(`ERROR!!! No candidate registered!`);
    }

});
module.exports = router;