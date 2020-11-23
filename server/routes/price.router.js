const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
  //query selects all prices from the database
  let query = `SELECT * from "price";`;
  pool
    .query(query)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

router.put('/', (req, res) => {
  console.log('in price put', req.body);
  let query = `UPDATE "price"
  SET "fuel_100L" = $1,
  "fuel_jetA" = $2;`;
  pool
    .query(query, [
      req.body.fuel_100L,
      req.body.fuel_jetA
    ])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
})


module.exports = router;