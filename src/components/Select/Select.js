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
        {optionList.map((item, index) => (
          <option
            key={`option_${index}`}
            index={`option_${index}`}
            value={item.value}
          >
            {item.label}
          </option>
        ))}
      </SelectStyle>
    </Fragment>
  )
}

Select.propTypes = {
  /** 접근성을 위해 레이블을 설정합니다. */
  label: string.isRequired,
  /** 접근성을 위해 레이블과 셀렉트의 id를 설정합니다. */
  id: string.isRequired,
  /** option에 전달하는 값은 배열 유형으로 전달합니다. 배열에는 label과 value가 포함되어야 합니다. */
  optionList: array,
  /** 레이블을 CSS로 감춤 처리 할 수 있습니다. */
  a11yLabel: bool,
}

export default Select
