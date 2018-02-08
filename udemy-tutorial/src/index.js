import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import App from './components/app'
import reducer from './reducers'

const store = createStore(reducer)

const render = () => {
  const state = store.getState()
  console.log(state)
  ReactDOM.render(
    <App />, document.querySelector('.container')
  )
}

render()
store.subscribe(render)
