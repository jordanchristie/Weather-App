import React from 'react';
import { render } from 'react-dom';
import App from './src/components/app';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import style from './styles/style.css';

import rootReducer from './src/reducers/index'; 

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App style={style}/>
  </Provider>
  , document.getElementById('root'));
