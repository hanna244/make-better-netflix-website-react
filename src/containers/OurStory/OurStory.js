import React, { useState, useEffect, useCallback } from 'react'
import { Promotion } from '..'
import { Background, Container } from '../../components'
import { Head } from './OurStory.style'

const OurStory = ({ headingLevel, ...restProps }) => {
  const fetchData = useCallback(() => {
    import('../../data/homeContext.json').then((module) => {
      const { default: _default } = module
      const { ko: koHomeData } = _default[0]
      setHomeContent(koHomeData)
    })
  }, [])

  const [homeContent, setHomeContent] = useState({})
  const { title, subTitle, signUp, promotionInfo } = homeContent

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return (
    <Background as="section" {...restProps}>
      <Container>
        <Head as={headingLevel}>넷플릭스 소개</Head>
        <p>{title}</p>
        <p>{subTitle}</p>
        <p>{signUp}</p>
        <Promotion />
        <p>{promotionInfo}</p>
      </Container>
    </Background>
  )
}

export default OurStory
