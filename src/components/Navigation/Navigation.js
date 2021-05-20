import React, { Fragment } from 'react'
import { NavStyle, NavLinkStyle } from './Navigation.style'
import { string, array } from 'prop-types'

const Navigation = ({ linkTag, linkArray, ...restProps }) => {
  let LinkTag = linkTag

  return (
    <Fragment>
      <NavStyle>
        {linkArray.map((item) => (
          <NavLinkStyle href={item.to}>{item.label}</NavLinkStyle>
        ))}
      </NavStyle>
    </Fragment>
  )
}

Navigation.defaultProps = {
  linkTag: 'a',
  linkArray: [
    { to: `/browse`, label: '홈' },
    { to: `/browse/genre/tv`, label: 'TV 프로그램' },
    { to: `/browse/genre/movie`, label: '영화' },
    { to: `/browse/mylist`, label: '내가 찜한 콘텐츠' },
  ],
}

Navigation.propTypes = {
  linkTag: string,
  linkArray: array,
}

export default Navigation
