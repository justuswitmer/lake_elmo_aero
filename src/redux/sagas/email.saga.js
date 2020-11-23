import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* emailConfirm(action) {
  console.log('in emailConfirm with my action', action);
  yield axios({
    method: 'POST',
    url: action.url,
    data: action.payload
  });
}

function* emailAdmin(action) {
  console.log('in emailAdmin with my action', action);
  yield axios({
    method: 'POST',
    url: action.url,
    data: action.payload
  });
}

function* emailSaga() {
  yield takeLatest('SEND_CONFIRM', emailConfirm);
  yield takeLatest('SEND_ADMIN', emailAdmin);
}

export default emailSaga;