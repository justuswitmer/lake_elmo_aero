const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');

router.get('/', rejectUnauthenticated, (req, res) => {
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

router.get('/times', (req, res) => {
  console.log('hit the appointment times route with params', req.query.dateOne, req.query.dateTwo);
  const queryString = `
  SELECT "appointment_date" 
  FROM "appointment"
  WHERE "appointment_date" BETWEEN $1 AND $2
  ORDER BY "appointment_date" ASC;`;
  pool.query(queryString, [req.query.dateOne, req.query.dateTwo])
    .then(dbRes => {
      res.send(dbRes.rows);
    })
    .catch(error => {
      console.log('error in GETting appointments', error);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  console.log('hit the router post for new appointment with:', req.body);
  const createdDate = new Date();
  const tempDate = new Date();
  const queryString = `
  INSERT INTO "appointment" 
  (
  "tail",
  "first",
  "last",
  "email",
  "phone",
  "appointment_date",
  "hangar_access",
  "hangar_num",
  "additional_serv",
  "fuel_qty",
  "fuel_type",
  "oil_qty",
  "oil_type",
  "additional_comm",
  "service_type",
  "created_date"
  )
  VALUES
  ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16);`;
  const queryParams =

    [
      req.body.tail,
      req.body.first,
      req.body.last,
      req.body.email,
      req.body.phone,
      req.body.appointment_date,
      req.body.hangar_access,
      req.body.hangar_num,
      req.body.additional_serv,
      req.body.fuel_qty,
      req.body.fuel_type,
      req.body.oil_qty,
      req.body.oil_type,
      req.body.additional_comm,
      req.body.service_type,
      createdDate
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

router.put('/:id', rejectUnauthenticated, (req, res) => {
  console.log('getting my req.body in PUT', req.body);
  console.log('getting my req.params in PUT', req.params);
  const id = req.params.id;
  const value = true;
  queryText = `UPDATE "appointment"
  SET "is_completed" = $1,
  "completed_date" = CURRENT_TIMESTAMP
  WHERE id = $2;`;
  pool
    .query(queryText, [value, id])
    .then(result => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log('we got an error in request router PUT', err);
      res.sendStatus(500);
    });
});

module.exports = router;