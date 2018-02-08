import React, { Component } from 'react'

import Greeting from './greeting'
import Param from './param'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Bob",
    }
  }

  handleNameChange(name) {
    this.setState({ name })
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={e => this.handleNameChange(e.target.value)}/>
        <Greeting name={this.state.name} />
        <Param name={this.props.name}
        age={this.props.age} />
      </div>)
  }
}

export default App
