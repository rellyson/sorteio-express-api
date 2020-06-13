const Router = require("express-promise-router");
const db = require("../config/database.js");

const router = new Router();

router.get("/", (req, res) => {
  res.send("It works! :D");
});

router.get("/now", async (req, res) => {
    const { rows } = await db.query('SELECT NOW() as now')
    res.send(rows[0]);
});

router.get("/listCandidates", async (req, res) => {
    const { rows } = await db.query('SELECT * from candidates')
    res.send(rows);
});

router.get('/listCandidate', async (req, res) => {
    const { id } = req.body
    const { rows } = await db.query('SELECT * FROM candidates WHERE id = $1', [id])
    res.send(rows[0])
  })

router.post("/insertCandidate", async (req, res) => {
    const { first_name,last_name, email } = req.body
    const { rows } = await db.query('INSERT INTO candidates(first_name, last_name, email) VALUES ($1, $2,$3)', [first_name, last_name, email])
    res.send(rows[0]);
});

router.delete("/removeCandidate", async (req, res) => {
    const { first_name,last_name } = req.body
    const { rows } = await db.query('DELETE FROM candidates WHERE first_name=$1 AND last_name=$2', [first_name, last_name])
    res.send(rows);
});

module.exports = router;
