import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const Navigation = ({ linkTag, linkArray, ...restProps }) => {
  let LinkTag = linkTag

  return (
    <Fragment>
      <nav {...restProps}>
        {linkArray.map((item) => (
          <LinkTag to={item.to}>{item.label}</LinkTag>
        ))}
      </nav>
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

Navigation.propTypes = {}

export default Navigation
