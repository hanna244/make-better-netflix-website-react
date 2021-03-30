import React, { useState, useEffect } from 'react'
import { Background, Container } from '../../components'
import { Promotion } from '../index'
import { SectionStyle } from './OurStory.style'

const OurStory = ({ headingLevel }) => {
  const [homeData, setHomeData] = useState({})
  const fetchData = () => {
    return import('../../data/homeContext.json')
      .then((data) => {
        // console.log(data)
        const { default } = data
        setHomeData(default)
      })
      .catch((error) => console.error('데이터를 불러오지 못했습니다.'))
  }
  // const {default} = data
  // setHomeData(default)

  useEffect(() => {
    fetchData()
    console.log(homeData)
  }, [homeData])

  return (
    <Container>
      <SectionStyle>
        <h2 as={headingLevel}></h2>
        <p></p>
        <p></p>
        <p></p>
        <Promotion />
      </SectionStyle>
    </Container>
  )
}

export default OurStory
