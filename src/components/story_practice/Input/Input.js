import React from 'react'
import './Input.scss'

const Input = (props) => {
  const { size = 'medium', placeholder, children, ...restProps } = props
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`input ${size}`}
      // className="input"
      {...restProps}
    >
      {children}
    </input>
  )
}

export default Input
