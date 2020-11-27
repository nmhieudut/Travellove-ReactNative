import * as ActionTypes from '../action/types';

const defaultState = {
  loading: false,
  registeredUser: null,
  success: null,
  error: null,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.AUTH_REGISTER:
      return {
        loading: true,
        registeredUser: null,
        success: null,
        error: null,
      };
    case ActionTypes.AUTH_REGISTER_SUCCESS:
      return {
        success: true,
        registeredUser: action.registeredUser,
        error: null,
        loading: false,
      };
    case ActionTypes.AUTH_REGISTER_FAILED:
      return {
        loading: false,
        success: null,
        error: action.error,
        ...state,
      };
    default:
      return state;
  }
}
