  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: 'timetocodeleah@gmail.com', //will pull in customer's email
    from: 'timetocodeleah@gmail.com', //to be services@lakeelmoaero.com
    subject: "We've received your service request",
    html: `<!DOCTYPE html>
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
        />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Lake Elmo Aero Confirmation</title>
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
            src="aero-logo.png"
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
            <h1 style="color: #0072ff">Thank you for your request, {name}!</h1>
            <h3 style="color: #54595f">Placed {created_date}</h3>
            <p>
              We will reach out to you soon to let you know the status of your
              request.
            </p>
            <div
              style="
                background-color: white;
                padding: 2px;
                border: 1px solid black;
                margin: 3%;
              "
            >
              <h2>Your Service Request</h2>
              <!-- better to use a table -->
              <div style="margin: auto; margin-top: 1%; overflow-x:auto;">
              <table style="margin: auto; border-collapse: collapse; width: auto;">
                <thead>
                  Service Details
                </thead>
                <tr style="max-width: 500px;">
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;">Appointment Date</th>
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;">Service Type</th>
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;">Additional Details</th>
                </tr>
                <tr>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;">{appointment_date}</td>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;">{service_type}</td>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;">{additional_serv}</td>
                </tr>
              </table>
            </div>
              <div style="margin: auto; margin-top: 1%; overflow-x:auto;">
              <table style="margin: auto; border-collapse: collapse; width: auto;">
                <thead>
                  Customer Details
                </thead>
                <tr>
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;">Full Name</th>
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;">Tail Number</th>
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;">Email</th>
                  <th style=" border: 1px solid black; padding: 10px; width: auto; background-color: #939ba5;">Phone</th>
                </tr>
                <tr>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;">{first} {last}</td>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;">{tail}</td>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;">{email}</td>
                  <td style=" border: 1px solid black; padding: 10px; width: auto;">{phone}</td>
                </tr>
              </table>
            </div>
            </div>
            <p>
              Thank you again for placing a request with Lake Elmo Aero. We
              appreciate your business!
            </p>
          </div>
          <div
            style="
              background-color: #54595fc0;
              max-width: 200px;
              width: auto;
              margin: 10px 20px auto;
              display: inline-flex;
              border: 1px solid black;
              box-shadow: 2px 2px 5px black;
              border-radius: 5px;
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
                  font-weight: bold;
                  text-shadow: 2px 2px 2px black;
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
              background-color: #54595fc0;
              max-width: 200px;
              width: auto;
              margin: 10px 20px auto;
              display: inline-flex;
              border: 1px solid black;
              box-shadow: 2px 2px 5px black;
              border-radius: 5px;
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
                  font-weight: bold;
                  text-shadow: 2px 2px 2px black;
                "
              >
                Lake Elmo Aero
              </p>
            </a>
          </div>
        </div>
        <p style="color: white">3275 Manning Ave N Lake Elmo, Minnesota</p>
        <p style="color: white">© Lake Elmo Aero</p>
      </body>
    </html>
  `,
  };
  sgMail.send(msg);
