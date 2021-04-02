import React, { Fragment, useContext } from 'react'
import { v4 as uuid } from 'uuid'
import { Merit } from '..'
import { DataContext } from '../../context/context'

const HomeMerit = () => {
  const meritContext = useContext(DataContext)
  const { meritData } = meritContext
  console.log(meritData)

  return (
    <Fragment>
      {meritData.map((item, index) => (
        <Merit
          key={uuid()}
          id={uuid()}
          heading={item.title}
          description={item.description}
          imageType={item.imageType}
          videoType={item.videoType}
          direction={item.direction}
          classNames={item.imageType}
          downloadContent={index === 1 ? true : false}
        />
      ))}
    </Fragment>
  )
}

export default HomeMerit
