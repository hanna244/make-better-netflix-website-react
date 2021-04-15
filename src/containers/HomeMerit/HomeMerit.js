import React, { useContext } from 'react'
import { Merit } from '..'
import { DataContext } from 'context/context'
import { Head } from './HomeMerit.style'

const HomeMerit = () => {
  const meritContext = useContext(DataContext)
  const { meritData } = meritContext

  return (
    <section>
      <Head>넷플릭스 장점</Head>
      {meritData.map((item, index) => (
        <Merit
          key={`merit_${index}`}
          id={`merit_${index}`}
          headingLevel="h3"
          heading={item.title}
          description={item.description}
          imageType={item.imageType}
          videoType={item.videoType}
          direction={item.direction}
          classNames={item.imageType}
          downloadContent={index === 1 ? true : false}
        />
      ))}
    </section>
  )
}

export default HomeMerit
