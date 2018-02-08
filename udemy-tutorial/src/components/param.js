import React from 'react'
import PropTypes from 'prop-types'

function Param(props) {
  return (<div>{props.name} is {props.age}</div>)
}

Param.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
}

export default Param
