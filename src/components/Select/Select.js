import React, { Fragment } from 'react'
import { v4 as uuid } from 'uuid'
import { bool, string, array } from 'prop-types'
import { SelectStyle, LabelStyle } from './Select.style'

const Select = ({ id, optionList = [], a11yLabel, label, ...restProps }) => {
  return (
    <Fragment>
      <LabelStyle a11yLabel={a11yLabel} htmlFor={id}>
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
  a11yLabel: bool,
}

export default Select
