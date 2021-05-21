import React, { Fragment } from 'react'
import { SelectNavStyle, SelectNavLinkStyle } from './SelectNavigation.style'
import { PropTypes } from 'prop-types'

const SelectNavigation = ({ linkArray, ...restProps }) => {
  return (
    <Fragment>
      <div>
        <button type="button"></button>
        <SelectNavStyle>
          {linkArray.map((item) => (
            <SelectNavLinkStyle href={item.to}>{item.label}</SelectNavLinkStyle>
          ))}
        </SelectNavStyle>
      </div>
    </Fragment>
  )
}

SelectNavigation.defaultProps = {
  linkArray: [
    { to: `/browse`, label: '홈' },
    { to: `/browse/genre/tv`, label: 'TV 프로그램' },
  ],
}

SelectNavigation.propTypes = {}

export default SelectNavigation
