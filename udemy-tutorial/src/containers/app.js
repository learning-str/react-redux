import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Greeting from '../components/greeting'
import Param from '../components/param'

const mapStateToProps = state => ({
  name: state.name
})

const mapDispatchToProps = dispatch => ({
  onNameChange: name => dispatch({ type: 'CHANGE_NAME', name })
})

class App extends Component {
  handleNameChange(name) {
    this.props.onNameChange(name)
  }

  render() {
    console.log(this.props)

    return (
      <div>
        <input
          type="text"
          onChange={e => {
            e.preventDefault()
            this.handleNameChange(e.target.value)
          }}/>
        <Greeting name={this.props.name} />
        <Param name={this.props.name}
        age={this.props.age} />
      </div>)
  }
}

App.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  onNameChange: PropTypes.func,
}

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App)

export default ConnectedApp
