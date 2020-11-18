import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
// Saga (import)
import createSagaMiddleware from 'redux-saga';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
// Reducers
// import authReducer from '../modules/auth/reducers';
// import registerReducer from '../modules/register/reducers'
// import cartsReducer from '../modules/carts/reducers'
// Saga (root)
import rootSagas from './rootSagas';
// Screen(import)
import AppNavigator from '../screens/AppNavigator';
// ROOT REDUCER
// const rootReducer = combineReducers({
//   authReducer,
//   registerReducer,
//   cartsReducer
// });
// STORE
// Root Saga

// Saga (run)
// sagaMiddleware.run(rootSagas);
// const store = createStore(
//   rootReducer,
//   // ONLY FOR DEBUG
//   composeWithDevTools(applyMiddleware(...middlewares)),
// );
export default function App() {
  return (
    <>
      <AppNavigator />
    </>
  );
}
