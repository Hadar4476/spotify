import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import './index.css';

import App from './App';

import reportWebVitals from './reportWebVitals';

import authReducer from './store/reducers/auth';

import { watchAuth } from './store/sagas';

const rootReducer = combineReducers({
  auth: authReducer,
});

const sagaMiddleWare = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleWare))
);

sagaMiddleWare.run(watchAuth);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
