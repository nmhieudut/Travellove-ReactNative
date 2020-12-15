import * as ActionTypes from '../action/types';
import {put, takeLatest} from 'redux-saga/effects';

import auth from '../../../services/auth';

function* Login(action) {
  console.log('Action', action);
  try {
    const response = yield auth.login(action.email, action.password);
    yield put({
      type: ActionTypes.AUTH_LOGIN_SUCCESS,
      loggedInUser: response.data,
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
    yield put({type: ActionTypes.AUTH_LOGIN_FAILED, error: error});
  }
}

// root saga
function* sagas() {
  yield takeLatest(ActionTypes.AUTH_LOGIN, Login);
}

export default sagas;
