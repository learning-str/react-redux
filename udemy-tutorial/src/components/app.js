import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Greeting from './greeting'
import Param from './param'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Bob",
    }
  }

  handleNameChange(e) {
    e.preventDefault()
    this.props.onNameChange(e.target.value)
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.name}
          onChange={e => this.handleNameChange(e)}/>
        <Greeting name={this.props.name} />
        <Param name={this.props.name}
        age={this.props.age} />
      </div>)
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
}

export default App
