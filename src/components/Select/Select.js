import React from 'react'
import { v4 as uuid } from 'uuid'
import { array, string } from 'prop-types'
import { SelectStyle, OptionStyle } from './Select.style'

const Select = ({ selected = "중국어", id, option, ...restProps }) => {
  return (
    <>
      <label htmlFor={id}></label>
      <SelectStyle id={id} {...restProps}>
        {option.map((item) => (
          {item?.includes(selected) ? <OptionStyle selected value={item.toLowerCase()} key={uuid()} id={uuid()}>
          {item}
        </OptionStyle> : <OptionStyle value={item.toLowerCase()} key={uuid()} id={uuid()}>
        {item}
      </OptionStyle>}
        ))}
      </SelectStyle>
    </>
  )
}

Select.propTypes = {
  /** 셀렉트의 옵션 값을 설정 할 수 있습니다. */
  option: array.isRequired,
  selected: string,
  /**  */
  id: string.isRequired,
}

export default Select
