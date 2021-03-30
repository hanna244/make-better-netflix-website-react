import React, { Fragment } from 'react'
import { v4 as uuid } from 'uuid'
import { bool, string, array } from 'prop-types'

const Select = ({ id, optionList, labelHidden, ...restProps }) => {
  return (
    <Fragment>
      <label labelHidden={labelHidden} htmlFor={id}></label>
      <select id={id} {...restProps}>
        {optionList.map((item) => (
          <option key={uuid()} id={uuid()} value={item.value}>
            {item.list}
          </option>
        ))}
      </select>
    </Fragment>
  )
}

Select.propTypes = {
  id: string.isRequired,
  optionList: array,
  labelHidden: bool,
}

export default Select
