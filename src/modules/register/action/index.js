import * as ActionTypes from './types';

export const registerAction = (values) => ({
  type: ActionTypes.AUTH_REGISTER,
  values,
});
