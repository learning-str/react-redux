import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import SomeComponent from './components/SomeComponent/SomeComponent';
import './styles/styles.css';

const store = configureStore();

render(
  <Provider store={store}>
      <SomeComponent />
  </Provider>,
  document.getElementById('app')
);
