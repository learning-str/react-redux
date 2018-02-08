import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/app'
import reducer from './reducers/'

ReactDOM.render(
  <Provider store={createStore(reducer)}>
    <App
      age='20'
    />
  </Provider>,
  document.querySelector('.container')
)
