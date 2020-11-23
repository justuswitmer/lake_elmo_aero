const express = require('express');
const admin = express();
const logo = ('https://www.lakeelmoaero.com/wp-content/uploads/2019/09/logo.png')


const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
admin.post('/', (req, res) => {
  console.log('in email-admin with my req.body', req.body);
  const {
    tail,
    first,
    last,
    email,
    phone,
    email_appt_date,
    hangar_access,
    hangar_num,
    additional_serv,
    fuel_qty,
    fuel_type,
    oil_qty,
    oil_type,
    additional_comm,
    service_type,
    display_date,
  } = req.body;
  const msg = {
    to: process.env.ADMIN_EMAIL_ADDRESS, //will pull in admin's email
    from: process.env.FROM_EMAIL_ADDRESS, //to be services@lakeelmoaero.com
    subject: "A Customer has Placed a New Request",
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
        />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lake Elmo Aero Admin Alert</title>
      </head>
    
      <body
        style="
          font-family: 'Roboto', sans-serif;
          text-align: center;
          background: rgb(7, 0, 130);
          background: linear-gradient(
            320deg,
            rgb(9, 1, 163) 0%,
            rgba(0, 115, 255, 1) 50%,
            rgba(255, 255, 255, 1) 100%
          );
          background-repeat: no-repeat;
          background-attachment: fixed;
        "
      >
        <div style="padding-top: 5px; margin: auto; margin-right: 85%">
          <img
            style="max-width: 200px; width: auto; height: auto"
            src=${logo}
          />
        </div>
        <div style="padding: auto; max-width: 1000px; width: auto; margin: auto">
          <div
            style="
              background-color: #dfdfdf7a;
              padding: 10px;
              margin: 20px;
              border: 1px solid black;
              box-shadow: 2px 4px 15px black;
            "
          >
            <h1 style="color: #0072ff; margin: 10px;">A customer has placed a new ${service_type} Service request</h1>
            <h3 style="color: #54595f">Submitted on ${display_date}</h3>
            <p style="font-weight: 550;">
             Please log on to the service app to update the request when service is completed.
            </p>
            <div
              style="
                background-color: white;
                padding: 2px;
                border: 1px solid black;
                margin: 3%;
              "
            >
              <h2>New ${service_type} Service Request</h2>
              <!-- better to use a table -->
              <div style="margin: auto; margin-top: 1%; overflow-x:auto;">
              <table style="margin: auto; border-collapse: collapse; width: auto;">
                <thead>
                  <h3>Service Details</h3>
                </thead>
                <tr style="max-width: 500px;">
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;">Appointment Date</th>
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;">Service Type</th>
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;">Additional Service Details</th>
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;"></th>
                </tr>
                <tr>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;">${email_appt_date}</td>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;">${service_type}</td>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;">${additional_serv}</td>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;"></td>
                </tr>
                <tr>
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;">Fuel Type</th>
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;">Fuel Quantity</th>
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;">Oil Type</th>
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;">Oil Quantity</th>
                </tr>
                <tr>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;">${fuel_type}</td>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;">${fuel_qty}</td>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;">${oil_type}</td>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;">${oil_qty}qts</td>
                </tr>
              </table>
            </div>
              <div style="margin: auto; margin-top: 2%; overflow-x:auto;">
              <table style="margin: auto; border-collapse: collapse; width: auto; margin-bottom: 15px;">
                <thead>
                 <h3>Customer Details</h3>
                </thead>
                <tr>
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;">Full Name</th>
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;">Tail Number</th>
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;">Email</th>
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;">Phone</th>
                </tr>
                <tr>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;">${first} ${last}</td>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;">N${tail}</td>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;">${email}</td>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;">${phone}</td>
                  
                </tr>
                <tr>
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;">Hangar Access</th>
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;">Hangar Number</th>
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;">Additional Comments</th>
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;"></th>
                </tr>
                <tr>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;">${hangar_access}</td>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;">${hangar_num}</td>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;">${additional_comm}</td>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;"></td>
                </tr>
                
              </table>
            </div>
          </div>
          </div>
        </div>
        <p style="color: white">3275 Manning Ave N Lake Elmo, Minnesota</p>
        <p style="color: white">© Lake Elmo Aero</p>
      </body>
    </html>
  `,
  };
  sgMail.send(msg)
    .then(() => {
      res.send("Success!");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("An error occured");
    });
});
module.exports = admin;