import React from 'react'
import { BrowseType } from '../../layout/LayoutTypes'
import { Route, Switch } from 'react-router-dom'
import { TV, Movie, MyList } from '.'

const Browse = () => {
  return (
    <BrowseType>
      <div style={{ fontSize: '50px' }}>브라우즈 페이지 입니다.</div>
      <Switch>
        <Route path="/browse/genre/tv" component={TV} />
        <Route path="/browse/genre/movie" component={Movie} />
        <Route path="/browse/mylist" component={MyList} />
      </Switch>
    </BrowseType>
  )
}

export default Browse
