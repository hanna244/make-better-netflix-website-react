import React, { useState, useEffect } from 'react'
import { Container } from '../../components'
import { Promotion } from '../index'
import { SectionStyle } from './OurStory.style'

const OurStory = ({ headingLevel }) => {
  const [homeData, setHomeData] = useState({})
  const fetchData = () => {
    return import('../../data/homeContext.json')
      .then((data) => {
        const { default: _default } = data
        const { ko: koHomeData } = _default[0]
        setHomeData(koHomeData)
      })
      .catch((error) => console.error('데이터를 불러오지 못했습니다.'))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container>
      <SectionStyle dim>
        <h2 as={headingLevel}>{homeData.title}</h2>
        <p>{homeData.strongText}</p>
        <p>{homeData.signUp}</p>
        <p>{homeData.promotion}</p>
        <Promotion />
      </SectionStyle>
    </Container>
  )
}

export default OurStory
