import React from 'react'
// import { string } from 'prop-types'

const Input = ({ label, type, id, alertMessege, ...restProps }) => {
  return (
    <div {...restProps}>
      <input type={type} id={id} />
      <label htmlFor={id}>{label}</label>
      <span role="alert">{alertMessege}</span>
    </div>
  )
}

export default Input
