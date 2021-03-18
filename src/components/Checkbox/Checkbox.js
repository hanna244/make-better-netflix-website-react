import React from 'react'
import { string, bool } from 'prop-types'
import { CheckboxWraper, CheckboxLabel, CheckboxInput } from './Checkbox.style'
import classNames from 'classnames'

const Checkbox = ({
  fgColor,
  checked = false,
  className = '',
  label,
  ...restProps
}) => {
  return (
    <CheckboxWraper>
      <CheckboxInput type="checkbox"></CheckboxInput>
      <CheckboxLabel
        className={classNames('checkbox', { checked })}
        style={{ color: fgColor ?? null }}
        {...restProps}
      >
        {label}
      </CheckboxLabel>
    </CheckboxWraper>
  )
}

Checkbox.propTypes = {
  /** 체크 박스의 label을 변경할 수 있습니다. */
  label: string,
  /** 체크 박스의 전경색을 설정합니다. */
  fgColor: string,
  /** 체크 박스의 상태를 설정합니다. */
  checked: bool,
}

export default Checkbox
