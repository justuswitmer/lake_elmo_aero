
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const appointmentRouter = require('./routes/appointment.router');
const priceRouter = require('./routes/price.router');
const confirmMessage = require('./messages/confirm.message');
const adminMessage = require('./messages/admin.message');
const completeMessage = require('./messages/complete.message');
const alertOneSms = require('./messages/alert.one.sms');
const alertTwoSms = require('./messages/alert.two.sms');
const alertThreeSms = require('./messages/alert.three.sms');
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require('cors');

// cors set up
app.use(cors())

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/appointment', appointmentRouter);
app.use('/price', priceRouter);
app.use("/email-confirm", confirmMessage);
app.use("/email-admin", adminMessage);
app.use("/email-complete", completeMessage);
app.use("/sms-alert-one", alertOneSms);
app.use("/sms-alert-two", alertTwoSms);
app.use("/sms-alert-three", alertThreeSms);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
