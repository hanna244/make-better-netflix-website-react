import React, { useEffect, useState } from 'react'
import { Merit } from '..'
import { Head } from './HomeMerit.style'

const HomeMerit = () => {
  const [meritData, setMeritData] = useState([])
  const fetchData = () => {
    import('data/merit.json')
      .then((data) => {
        const { default: _default } = data
        setMeritData(_default)
      })
      .catch((error) => console.error('merit 데이터를 불러오지 못했습니다.'))
  }

  useEffect(() => {
    fetchData()
  }, [])

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
