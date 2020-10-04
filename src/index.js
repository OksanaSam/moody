import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
//----------REDUX--------//
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

//----------REACT AXE--------//
const config = {
  rules: [
    {
      id: 'radiogroup',
      enabled: true,
    },
  ],
};

if (process.env.NODE_ENV !== 'production') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000, config);
}
//--------------------------//

ReactDOM.render(
  <Provider store={createStore(reducers, applyMiddleware(thunk))}>
    <App />
  </Provider>,
  document.getElementById('root')
);
