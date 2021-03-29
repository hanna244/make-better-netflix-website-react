import React from 'react'
import { array, string } from 'prop-types'
import { SelectStyle } from './Select.style'

const Select = ({ id, option, ...restProps }) => {
  return (
    <>
      <label htmlFor={id}></label>
      <SelectStyle id={id} {...restProps}>
        {option.map((item) => (
          <option>{item}</option>
        ))}
      </SelectStyle>
    </>
  )
}

Select.propTypes = {
  /** 셀렉트의 옵션 값을 배열로 설정 할 수 있습니다. */
  option: array.isRequired,
  id: string.isRequired,
}

export default Select
