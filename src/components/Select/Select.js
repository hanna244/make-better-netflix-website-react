import React from 'react'
import { v4 as uuid } from 'uuid'
import { array, string } from 'prop-types'
import { SelectStyle, OptionStyle } from './Select.style'
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
          // includes() 메서드 사용 불가 
          {item?.includes(selected) ? <OptionStyle selected value={item.toLowerCase()} key={uuid()} id={uuid()}>
          {item}
        </OptionStyle> : <OptionStyle value={item.toLowerCase()} key={uuid()} id={uuid()}>
        {item}</OptionStyle>}
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
