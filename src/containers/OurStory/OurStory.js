import React, { useState, useEffect, useCallback } from 'react'
import { Background } from '../../components'
import { Promotion } from '../'

import {
  MainContainer,
  Head,
  TitleStyle,
  SubTitleStyle,
  SignUpStyle,
  PromotionInfoStyle,
  // OurStoryPromotion,
} from './OurStory.style'

const OurStory = ({ promotionprop, ...restProps }) => {
  // 로컬 데이터 비동기로 받아오기
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
    <Background dim as="section" {...restProps}>
      <MainContainer>
        <Head>넷플릭스 소개</Head>
        <TitleStyle>{title}</TitleStyle>
        <SubTitleStyle>{subTitle}</SubTitleStyle>
        <SignUpStyle>{signUp}</SignUpStyle>
        {/* <OurStoryPromotion /> */}
        <Promotion id="ourStoryUserEmail" name="email" {...promotionprop} />
        <PromotionInfoStyle>{promotionInfo}</PromotionInfoStyle>
      </MainContainer>
    </Background>
  )
}

export default OurStory
