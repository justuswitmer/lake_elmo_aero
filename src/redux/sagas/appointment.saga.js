import { put, takeLatest } from "redux-saga/effects";
import axios from "axios";

// fetches appointments to display in admin page
function* fetchAppointmentSaga() {
  let response = yield axios({
    method: 'GET',
    url: '/appointment',
  });
  console.log('in fetchAppointmentSaga', response);
  yield put({
    type: 'SET_APPOINTMENT',
    payload: response.data,
  });
}

function* completeAppointmentSaga(action) {
  console.log('in completeAppointmentSaga', action.payload);
  yield axios({
    method: 'PUT',
    url: action.url
  });
  yield put({
    type: "FETCH_APPOINTMENT"
  });
}

function* appointmentSaga() {
  yield takeLatest('FETCH_APPOINTMENT', fetchAppointmentSaga);
  yield takeLatest('COMPLETE_APPOINTMENT', completeAppointmentSaga)
}

export default appointmentSaga;