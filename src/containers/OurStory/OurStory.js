import React, { useState, useEffect, useCallback } from 'react'
import { Background } from '../../components'
import {
  MainContainer,
  Head,
  TitleStyle,
  SubTitleStyle,
  SignUpStyle,
  PromotionInfoStyle,
  OurStoryPromotion,
} from './OurStory.style'

const OurStory = ({ ...restProps }) => {
  /* 아워 스토리 데이터 불러오기 ---------------------------------------------------------- */
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

  /* 인풋 value 감지 (onchange) --------------------------------------------------- */
  const [value, setValue] = useState('')

  const handleChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  return (
    <Background dim as="section" {...restProps}>
      <MainContainer>
        <Head>넷플릭스 소개</Head>
        <TitleStyle>{title}</TitleStyle>
        <SubTitleStyle>{subTitle}</SubTitleStyle>
        <SignUpStyle>{signUp}</SignUpStyle>
        <OurStoryPromotion
          value={value}
          handleChange={handleChange}
          name="email"
          id="ourStoryEmail"
        />
        <PromotionInfoStyle>{promotionInfo}</PromotionInfoStyle>
      </MainContainer>
    </Background>
  )
}

export default OurStory
