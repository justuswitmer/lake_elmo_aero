const express = require('express');
const admin = express();
const logo = 'https://www.lakeelmoaero.com/wp-content/uploads/2019/09/logo.png';

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
    subject: 'A Customer has Placed a New Request',
    html: 
    `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lake Elmo Aero Admin Confirmation</title>
      </head>
    
      <body
        style="
          font-family: 'Roboto', sans-serif;
          text-align: center;
          background: url(https://www.lakeelmoaero.com/wp-content/uploads/2019/10/Untitled-design-21-1.png);
          margin: 0%;
          background-size: cover;
          background-attachment: fixed;
        "
      >
      <div>
        <div style="background-color: white; padding: 15px; margin-bottom: 30px;">
          <img style="max-width: 200px; width: auto; height: auto" src="${logo}" />
        </div>
        <div
          style="
            padding: 10px;
            margin: auto;
            margin-left: 60px;
            margin-right: 60px;
          "
        >
          
          <h1 style="color: black">
            A customer has placed a new ${service_type} Service Request
          </h1>
          <h3 style="color: black">Submitted on ${display_date}</h3>
          <p style="color: black">
            Please log on to the service app to update the request when service is completed.</p>
          <div
            style="
              background-color: white;
              padding: 2px;
              margin: auto;
              border-radius: 10px; 
              box-shadow: 2px 2px 10px black;
              max-width: 800px;
              margin-bottom: 30px;
            "
          >
            <h2>New ${service_type} Service Request</h2>
              <!-- better to use a table -->
              <div style="margin: auto; margin-top: 1%; overflow-x: auto;">
                <h3>Service Details</h3>
                <table style="margin: auto; text-align: center; border-collapse: collapse; width: 500px">
                  <thead style="text-align: center;">
                  
                  </thead>
                  <tr style="max-width: 500px">
                    <th
                      style="
                        border: 1px solid black;
                        padding: 10px;
                        width: auto;
                        background-color:#b1b8c0;
                      "
                    >
                      Appointment Date
                    </th>
                    <th
                      style="
                        border: 1px solid black;
                        padding: 10px;
                        width: auto;
                        background-color: #b1b8c0;
                      "
                    >
                      Service Type
                    </th>
                    <th
                      style="
                        border: 1px solid black;
                        padding: 10px;
                        width: auto;
                        background-color: #b1b8c0;
                      "
                    >
                      Additional Service Details
                    </th>
                  </tr>
                  <tr>
                    <td style="border: 1px solid black; padding: 10px; width: auto">
                      ${email_appt_date}
                    </td>
                    <td style="border: 1px solid black; padding: 10px; width: auto">
                      ${service_type}
                    </td>
                    <td style="border: 1px solid black; padding: 10px; width: auto">
                      ${additional_serv}
                    </td>
                  </tr>
                </table>
                <table
                  style="
                    margin: auto;
                    border-collapse: collapse;
                    width: 500px;
                    margin-bottom: 5px;
                  "
                >
                  <tr>
                    <th
                      style="
                        border: 1px solid black;
                        padding: 10px;
                        width: auto;
                        background-color: #b1b8c0;
                      "
                    >
                      Fuel Type
                    </th>
                    <th
                      style="
                        border: 1px solid black;
                        padding: 10px;
                        width: auto;
                        background-color: #b1b8c0;
                      "
                    >
                      Fuel Quantity
                    </th>
                    <th
                      style="
                        border: 1px solid black;
                        padding: 10px;
                        width: auto;
                        background-color: #b1b8c0;
                      "
                    >
                      Oil Type
                    </th>
                    <th
                      style="
                        border: 1px solid black;
                        padding: 10px;
                        width: auto;
                        background-color: #b1b8c0;
                      "
                    >
                      Oil Quantity
                    </th>
                  </tr>
                  <tr>
                    <td style="border: 1px solid black; padding: 10px; width: auto">
                      ${fuel_type}
                    </td>
                    <td style="border: 1px solid black; padding: 10px; width: auto">
                      ${fuel_qty}
                    </td>
                    <td style="border: 1px solid black; padding: 10px; width: auto">
                      ${oil_type}
                    </td>
                    <td style="border: 1px solid black; padding: 10px; width: auto">
                      ${oil_qty}qts
                    </td>
                  </tr>
                </table>
              </div>
              <div style="margin: auto; margin-top: 2%; overflow-x: auto">
                <h3>Customer Details</h3>
                <table style="margin: auto; text-align: center; border-collapse: collapse; width: 500px">
                  <thead style="text-align: center;">
                  </thead>
                  <tr>
                    <th
                      style="
                        border: 1px solid black;
                        padding: 10px;
                        width: auto;
                        background-color: #b1b8c0;
                      "
                    >
                      Full Name
                    </th>
                    <th
                      style="
                        border: 1px solid black;
                        padding: 10px;
                        width: auto;
                        background-color: #b1b8c0;
                      "
                    >
                      Tail Number
                    </th>
                    <th
                      style="
                        border: 1px solid black;
                        padding: 10px;
                        width: auto;
                        background-color: #b1b8c0;
                      "
                    >
                      Email
                    </th>
                    <th
                      style="
                        border: 1px solid black;
                        padding: 10px;
                        width: auto;
                        background-color: #b1b8c0;
                      "
                    >
                      Phone
                    </th>
                  </tr>
                  <tr>
                    <td style="border: 1px solid black; padding: 10px; width: auto">
                      ${first} ${last}
                    </td>
                    <td style="border: 1px solid black; padding: 10px; width: auto">
                      N${tail}
                    </td>
                    <td style="border: 1px solid black; padding: 10px; width: auto">
                      ${email}
                    </td>
                    <td style="border: 1px solid black; padding: 10px; width: auto">
                      ${phone}
                    </td>
                  </tr>
                </table>
                <table
                  style="margin: auto; border-collapse: collapse; width: 500px; margin-bottom: 50px;"
                >
                  <tr>
                    <th
                      style="
                        border: 1px solid black;
                        padding: 10px;
                        width: auto;
                        background-color: #b1b8c0;
                      "
                    >
                      Hangar Access
                    </th>
                    <th
                      style="
                        border: 1px solid black;
                        padding: 10px;
                        width: auto;
                        background-color: #b1b8c0;
                      "
                    >
                      Hangar Number
                    </th>
                    <th
                      style="
                        border: 1px solid black;
                        padding: 10px;
                        width: auto;
                        background-color: #b1b8c0;
                      "
                    >
                      Additional Comments
                    </th>
                  </tr>
                  <tr>
                    <td style="border: 1px solid black; padding: 10px; width: auto">
                      ${hangar_access}
                    </td>
                    <td style="border: 1px solid black; padding: 10px; width: auto">
                      ${hangar_num}
                    </td>
                    <td style="border: 1px solid black; padding: 10px; width: auto">
                      ${additional_comm}
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
          <div>
            <p style="color: black; text-decoration: none;">3275 Manning Ave N Lake Elmo, Minnesota</p>
            <p style="color: black; text-decoration: none;">© Lake Elmo Aero</p>
          </div>
        </div>
      </body>
    </html>
  `,
  };
  sgMail
    .send(msg)
    .then(() => {
      res.send('Success!');
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('An error occured');
    });
});
module.exports = admin;
