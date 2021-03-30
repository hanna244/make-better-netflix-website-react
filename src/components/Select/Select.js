import React, { Fragment } from 'react'
import { v4 as uuid } from 'uuid'
import { bool, string, array } from 'prop-types'
import { SelectStyle, LabelStyle } from './Select.style'

const Select = ({ id, optionList = [], labelHidden, label, ...restProps }) => {
  return (
    <Fragment>
      <LabelStyle labelHidden={labelHidden} htmlFor={id}>
        {label}
      </LabelStyle>
      <SelectStyle id={id} {...restProps}>
        {optionList.map((item) => (
          <option key={uuid()} id={uuid()} value={item.value}>
            {item.label}
          </option>
        ))}
      </SelectStyle>
    </Fragment>
  )
}

Select.propTypes = {
  id: string.isRequired,
  optionList: array,
  labelHidden: bool,
}

export default Select
