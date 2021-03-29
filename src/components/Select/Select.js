import React from 'react'
import { v4 as uuid } from 'uuid'
import { array, string } from 'prop-types'
import { SelectStyle } from './Select.style'
import { a11yHidden } from '../../styles/common'

const Select = ({ label, selected = '', id, option, ...restProps }) => {
  console.log(option)
  return (
    <>
      <label style={{ a11yHidden }} htmlFor={id}>
        {label}
      </label>
      <SelectStyle id={id} {...restProps}>
        {option.map((item) => (
          <option value={item.value.toLowerCase()} key={uuid()} id={uuid()}>
            {item.list}
          </option>
        ))}
        {/* {option.map((item) => (
          // includes() 메서드 사용 시 오류 
          {item?.includes(selected) ? <option selected value={item.toLowerCase()} key={uuid()} id={uuid()}>
          {item}</option> 
          : <option value={item.toLowerCase()} key={uuid()} id={uuid()}>{item}</option>}
        ) */}
      </SelectStyle>
    </>
  )
}

Select.propTypes = {
  /** 셀렉트의 옵션 값을 설정 할 수 있습니다. */
  option: array,
  /** 기본으로 선택되는 옵션을 지정할 수 있습니다. */
  selected: string,
  /** 접근성을 위해 select의 레이블을 설정해야 합니다. 설정한 레이블은 숨김 처리 됩니다(CSS) */
  label: string.isRequired,
  /** 접근성을 위해 select의 레이블의 고유 id를 설정해야 합니다. */
  id: string.isRequired,
}

export default Select
