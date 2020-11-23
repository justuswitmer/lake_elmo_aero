const express = require("express");
const pool = require("../modules/pool");
const router = express.Router();
const {
  rejectUnauthenticated,
} = require("../modules/authentication-middleware");


router.get('/', (req, res) => {
  //query selects all prices from the database
  let query = `SELECT * from "price"
  ORDER BY "id" ASC;`;
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

router.put("/:id", (req, res) => {
  console.log("in price put with req.body", req.body);
  console.log("in price put with req.params", req.params);
  let pricePerGal = req.body.pricePerGal;
  let id = req.params.id;
  let query = `UPDATE "price"
  SET "pricePerGal" = $1
  WHERE id= $2
  ;`;
  pool
    .query(query, [pricePerGal, id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(500);
    });
});

module.exports = router;
