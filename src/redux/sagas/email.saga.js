import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* emailConfirm(action) {
  console.log('in emailConfirm with my action', action);
  yield axios({
    method: 'POST',
    url: action.url,
    data: action.payload
  });
}

function* emailSaga() {
  yield takeLatest('SEND_CONFIRM', emailConfirm);
}

export default emailSaga;