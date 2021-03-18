import React from 'react'
import { string } from 'prop-types'
import { CheckboxLabel, CheckboxInput } from './Checkbox.style'

const Checkbox = ({ label, ...restProps }) => {
  return (
    <CheckboxLabel {...restProps}>
      <CheckboxInput type="checkbox"></CheckboxInput>
      {label}
    </CheckboxLabel>
  )
}

Checkbox.propTypes = {
  label: string,
}

export default Checkbox
