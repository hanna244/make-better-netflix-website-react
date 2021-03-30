import React, { useState, useEffect } from 'react'
import { Container } from '../../components'
import { Promotion } from '../index'
import { SectionStyle } from './OurStory.style'

const OurStory = ({ headingLevel }) => {
  const [homeData, setHomeData] = useState({})
  // koHomeData에 접근 불가능 ? 왜 ?
  // https://shhn0509.gitbook.io/netflix-website-react/undefined-3/error-notes#6
  const { ko: koHomeData } = homeData[0]
  console.log(koHomeData)
  // console.log(homeData[0])
  // const { title, strongText, signUp, promotion } = koHomeData
  const fetchData = () => {
    return import('../../data/homeContext.json')
      .then((data) => {
        const { default: _default } = data
        setHomeData(_default)
      })
      .catch((error) => console.error('데이터를 불러오지 못했습니다.'))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container>
      <SectionStyle dim>
        {/* <h2 as={headingLevel}>{title}</h2>
        <p>{strongText}</p>
        <p>{signUp}</p>
        <p>{promotion}</p> */}
        <Promotion />
      </SectionStyle>
    </Container>
  )
}

export default OurStory
