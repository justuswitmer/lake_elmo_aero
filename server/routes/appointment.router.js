const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  const queryString = `
  SELECT *
  FROM "appointment"
  ORDER BY "appointment_date" ASC;`;
  pool.query(queryString)
    .then(dbRes => {
      res.send(dbRes.rows);
    })
    .catch(error => {
      console.log('error in GETting appointments', error);
      res.sendStatus(500);
    });
});


router.post('/', (req, res) => {
  const queryString = `
  INSERT INTO "appointment" 
  (
  "tail",
  "first",
  "last",
  "email",
  "phone",
  "date_time",
  "hangar_access",
  "hangar_num",
  "additional_serv",
  "fuel_qty",
  "fuel_type",
  "oil_qty",
  "oil_type",
  "additional_comm"
  )
  VALUES
  ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14);`;
  const queryParams =
    [
      req.body.tail,
      req.body.first,
      req.body.last,
      req.body.email,
      req.body.phone,
      req.body.date_time,
      req.body.hangar_access,
      req.body.hangar_num,
      req.body.additional_serv,
      req.body.fuel_qty,
      req.body.fuel_type,
      req.body.oil_qty,
      req.body.oil_type,
      req.body.additional_comm
    ]
  pool.query(queryString, queryParams)
    .then((results) => {
      res.sendStatus(201);
    })
    .catch(error => {
      console.log('error in POSTing appt', error);
      res.sendStatus(500);
    });


});

module.exports = router;