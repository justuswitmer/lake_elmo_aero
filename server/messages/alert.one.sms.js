// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
require('dotenv').config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const adminOne = process.env.ADMIN_ONE;
const twilioNumber = process.env.TWILIO_NUMBER;
const client = require('twilio')(accountSid, authToken);
const express = require('express');
const sms = express();


sms.post("/", (req, res) => {
  const {
    first,
    last,
    email_appt_date,
    service_type,
  } = req.body;
client.messages
  .create({
     body: `${first} ${last} has created a new ${service_type} service request for ${email_appt_date}. Login to the app for more details`,
     from: `+1${twilioNumber}`,
     to: `+1${adminOne}`
   })
  .then(message => console.log(message.sid))
  .catch((err) => {
    console.error(err);
    res.status(500).send("Something went wrong");
  })
})

module.exports = sms;





// npm install twilio
//   node server/sms/confirm.sms.js