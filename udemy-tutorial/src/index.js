import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import App from './components/app'
import reducer from './reducers/'

ReactDOM.render(
  <App
    store={createStore(reducer)}
    age='20'
  />,
  document.querySelector('.container')
)
