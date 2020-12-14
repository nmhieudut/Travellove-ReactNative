import * as ActionTypes from '../action/types';

const defaultState = {
  loading: false,
  loggedInUser: null,
  error: null,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.AUTH_LOGIN:
      return {
        loading: true,
        loggedInUser: null,
        error: null,
      };
    case ActionTypes.AUTH_LOGIN_SUCCESS:
      return {
        loading: false,
        loggedInUser: action.loggedInUser,
        error: null,
      };
    case ActionTypes.AUTH_LOGIN_FAILED:
      return {
        loading: false,
        loggedInUser: null,
        error: action.error,
      };
    case ActionTypes.CACHE_LOGIN:
      return {
        ...state,
        loggedInUser: action.loggedInUser,
      };
    case ActionTypes.AUTH_LOGOUT:
      return {
        ...state,
        loggedInUser: null,
        error: null,
      };
    default:
      return state;
  }
}
