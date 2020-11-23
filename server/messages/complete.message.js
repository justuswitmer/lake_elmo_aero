const express = require('express');
const complete = express();
const logo = 'https://www.lakeelmoaero.com/wp-content/uploads/2019/09/logo.png';

const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
complete.post('/', (req, res) => {
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
    to: email, //will pull in admin's email
    from: process.env.FROM_EMAIL_ADDRESS, //to be services@lakeelmoaero.com
    subject: "We've Completed your Service Request",
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
        <title>Lake Elmo Aero Complete</title>
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
              ${first}, your service request has been completed!
            </h1>
            <h3 style="color: black">Completed on ${display_date}</h3>
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
              <h2>Your Completed Service Request</h2>
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
            </div>
          </div>
          <div>
            <p style="font-weight: bold; color: black;">
              Thank you again for placing a request with Lake Elmo Aero. We
              appreciate your business!
            </p>
            <div
              style="
                background: rgb(0, 198, 255);
                background: linear-gradient(
                  90deg,
                  rgba(0, 198, 255, 1) 0%,
                  rgba(0, 114, 255, 1) 50%
                );
                max-width: 200px;
                width: auto;
                margin: 10px 20px auto;
                display: inline-flex;
                border-radius: 20px;
              "
            >
              <a
                style="color: white; text-decoration: none"
                href="https://www.lakeelmoaero.com/contact/"
              >
                <p
                  style="
                    margin: auto;
                    color: white;
                    display: inline-flex;
                    padding: 10px 30px 10px 30px;
                  "
                >
                  Contact Us
                </p>
              </a>
            </div>
            <!-- <p class="info">651-777-1399</p>
              <p class="info">hello@LakeElmoAero.com</p> -->
            <div
              style="
                background: rgb(0, 198, 255);
                background: linear-gradient(
                  90deg,
                  rgba(0, 198, 255, 1) 0%,
                  rgba(0, 114, 255, 1) 50%
                );width: 200px;
                width: auto;
                margin: 10px 20px auto;
                display: inline-flex;
                border-radius: 20px;
              "
            >
              <a
                style="color: white; text-decoration: none"
                href="https://www.lakeelmoaero.com/"
              >
                <p
                  style="
                    margin: auto;
                    color: white;
                    display: inline-flex;
                    padding: 10px 30px 10px 30px;
                  "
                >
                  Lake Elmo Aero
                </p>
              </a>
            </div>
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
module.exports = complete;
