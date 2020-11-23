import React, { Fragment, useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from 'axios';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import mapStoreToProps from '../../redux/mapStoreToProps';

function FieldServiceApptForm(props) {
  const newAppointment = useSelector(state => state.newAppointment);
  const [firstName, setFirstName] = useState(newAppointment.first);
  const [lastName, setLastName] = useState(newAppointment.last);
  const [hangarNum, setHangarNum] = useState(newAppointment.hangar_num);
  const [phoneNum, setPhoneNum] = useState(newAppointment.phone);
  const [email, setEmail] = useState(newAppointment.email);
  //const [apptDate, setApptDate] = useState(newAppointment.appointment_date);
  const [hangarAccess, setHangarAccess] = useState(newAppointment.hangar_access);
  const [doorCode,setDoorCode] = useState('');
  const [addComm, setAddComm] = useState(newAppointment.additional_comm);


  const dispatch = useDispatch();
  const addDetails = () => {
    const newHangarAccess = hangarAccess === "Door Code" ? `Door Code: ${doorCode}` : hangarAccess
    dispatch({
      type: 'SET_FIRST',
      payload: firstName
    })
    dispatch({
      type: 'SET_LAST',
      payload: lastName
    })
    dispatch({
      type: 'SET_HANGAR_NUM',
      payload: hangarNum
    })
    dispatch({
      type: 'SET_PHONE',
      payload: phoneNum
    })
    dispatch({
      type: 'SET_EMAIL',
      payload: email
    })
    // dispatch({
    //   type: 'SET_APPT_DATE',
    //   payload: apptDate
    // })
    dispatch({
      type: 'SET_HANGAR_ACCESS',
      payload: newHangarAccess
    })
    dispatch({
      type: 'SET_ADD_COMM',
      payload: addComm
    })
  }

  // const [selectedDate, handleDateChange] = useState(new Date());
  // const [date, setDate] = useState('');
  // const [times, setTimes] = useState('');
  // // const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('whats the date', selectedDate);
    
  //   axios.get('/appointment/times', {
  //     params: {
  //       date: selectedDate
  //     }
  //   })
  //     .then(res => {
  //       setTimes(res.data)
  //     });
  // }, [selectedDate]);




  return (
  <div className="step-one">
    <section className="container">
      <div className="card my-5">
        <div>
          <h4>Field Service</h4>
        </div>
        <div>
          <p className="lg">N{newAppointment.tail}</p>
          <h3>Appointment Details</h3>
        </div>
        <div>
          <p className="lead">Contact Information</p>
          <form class="">
            <div class="form-group mb-2">
              <p className="text-bold lead"></p>
            </div>
            <div class="form-group mx-sm-3 mb-2">
              <label for="inputPassword2" class="sr-only"></label>
              <input
                type="text"
                className="form-control"
                id="inputPassword2"
                placeholder="First Name"
                value={firstName}
                onChange={event => setFirstName(event.target.value)}
              />    
              <label for="inputPassword2" class="sr-only"></label>
              <input
                type="text"
                className="form-control"
                id="inputPassword2"
                placeholder="Last Name"
                value={lastName}
                onChange={event => setLastName(event.target.value)}
              />
              <label for="inputPassword2" class="sr-only"></label>
              <input
                type="text"
                class="form-control"
                id="inputPassword2"
                placeholder="Hanger Number"
                value={hangarNum}
                onChange={event => setHangarNum(event.target.value)}
              />
              <label for="inputPassword2" class="sr-only"></label>
              <input
                type="tel"
                class="form-control"
                id="inputPassword2"
                placeholder="Phone"
                value={phoneNum}
                onChange={event => setPhoneNum(event.target.value)}
              />

              <label for="inputPassword2" class="sr-only"></label>
              <input
                type="text"
                class="form-control"
                id="inputPassword2"
                placeholder="Email"
                value={email}
                onChange={event => setEmail(event.target.value)}
              />
            </div>
            {/* <div className="DatePicker">
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <Fragment>   
                  <KeyboardDatePicker
                    clearable
                    disablePast
                    placeholder={selectedDate}
                    value={selectedDate}
                    onChange={date => handleDateChange(date)}
                    format="MM/dd/yyyy"
                  />
                </Fragment>
              </MuiPickersUtilsProvider>
            </div> */}
            <div>
              {/* <section>
                <p className="lead">Date</p>
                <label for="appointment">Requested Date:</label>
                <input 
                type="date"
                id="appointment"
                name="appointment"
                selected={date}
                onChange={setDate}
                />
              </section> */}
              <section>
                <p className="lead">Time</p>
                <input type="time" 
                
                />
              </section>
              <section>
                <p className="lead">Hanger Access</p>
                <select class="custom-select" id="inputGroupSelect01"
                  value={hangarAccess}
                  onChange={event => setHangarAccess(event.target.value)}
                >
                  <option selected>Choose...</option>
                  <option value="I will be there">I will be there</option>
                  <option value="Door Code">Door Code</option>
                  <option value="Lake Elmo Aero has access">Lake Elmo Aero has access</option>
                  <option value="Hanger Unlocked">Hanger Unlocked</option>
                </select>
              </section>
              <section>
                    {hangarAccess === "Door Code" ? (
                        <input
                          type="text"
                          // class="form-control"
                          value={doorCode}
                          onChange={event => setDoorCode(event.target.value)}
                          id="inputPassword2"
                          placeholder="Enter Code"
                        />
                        
                    ) : (
                      <div hidden>
                      </div>
                    )}
                  </section>
              <section>
                <p className="lead">Additional Comments</p>
                <div class="input-group">
                  <textarea
                    class="form-control"
                    aria-label="With textarea"
                    value={addComm}
                    onChange={event => setAddComm(event.target.value)}
                  > 
                  </textarea>
                </div>
              </section>
            </div>
          </form>
        </div>  
        <div className="flex btn-grouping">
          <div className="btn-grouping">
            <Link to="/FieldServiceForm">
              <Button>Back</Button>
            </Link>
            <Link to="/ReviewSubmit">
              <Button onClick={addDetails}>Next</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}

export default FieldServiceApptForm;
