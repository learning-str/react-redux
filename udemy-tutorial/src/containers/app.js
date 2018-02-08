import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Greeting from '../components/greeting'
import Param from '../components/param'

class App extends Component {
  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(() => {
      this.forceUpdate()
    })
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleNameChange(e) {
    e.preventDefault()
    this.props.store.dispatch({ type: 'CHANGE_NAME', name: e.target.value })
  }

  render() {
    const state = this.props.store.getState()
    return (
      <div>
        <input
          type="text"
          value={state.name}
          onChange={e => this.handleNameChange(e)}/>
        <Greeting name={state.name} />
        <Param name={state.name}
        age={this.props.age} />
      </div>)
  }
}

App.propTypes = {
  // name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  store: PropTypes.shape({
    subscribe: PropTypes.func,
    getState: PropTypes.func,
    dispatch: PropTypes.func,
  }).isRequired,
}

export default App
