import * as ActionTypes from './types';

export const registerAction = (values) => ({
  type: ActionTypes.AUTH_REGISTER,
  values,
});
export const clearRegisterCacheAction = () => ({
  type: ActionTypes.CLEAR_CACHE,
});
