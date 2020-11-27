import * as ActionTypes from '../action/types';
import {put, takeLatest} from 'redux-saga/effects';

import register from '../../../services/register';

function* Register(action) {
  console.log('Action: ', action);
  try {
    const response = yield register.register(action.values);
    yield put({
      type: ActionTypes.AUTH_REGISTER_SUCCESS,
      registeredUser: response,
    });
    console.log('response: ', response);
  } catch (error) {
    console.log(error);
    yield put({type: ActionTypes.AUTH_REGISTER_FAILED, error: error});
  }
}

// root saga
function* sagas() {
  yield takeLatest(ActionTypes.AUTH_REGISTER, Register);
}

export default sagas;
