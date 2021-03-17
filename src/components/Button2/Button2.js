import React from 'react'
import './Button2.sass'

const Button2 = (props) => {
  const { variant = 'primary', children, ...restProps } = props
  return (
    <button className={`button ${variant}`} {...restProps}>
      {children}
    </button>
  )
}

export default Button2
