import React from 'react'
import './Center.sass'

const Center = ({ children, ...restProps }) => {
  return <div className="center">{children}</div>
}

export default Center
