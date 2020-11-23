import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* smsAlert(action) {
  console.log('in smsAlert with my action', action);
  yield axios({
    method: 'POST',
    url: action.url,
    data: action.payload
  });
}

function* smsSaga() {
    yield takeLatest('SEND_ALERT_ONE', smsAlert);
    yield takeLatest('SEND_ALERT_TWO', smsAlert);
    yield takeLatest('SEND_ALERT_THREE', smsAlert);
  }

export default smsSaga;
