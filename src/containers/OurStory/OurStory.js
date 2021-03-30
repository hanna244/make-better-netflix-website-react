import React, { useState, useEffect } from 'react'
import { Background } from '../../components'
import { Promotion } from '../index'
import {
  ContainerStyle,
  SectionStyle,
  TitleStyle,
  StrongTextStyle,
  SignUpStyle,
  PromotionTextStyle,
  OurStoryPromotion,
} from './OurStory.style'

const OurStory = ({ headingLevel }) => {
  const [homeData, setHomeData] = useState({})
  const { title, strongText, signUp, promotionText } = homeData
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
    <ContainerStyle as="section">
      {/* as=section으로 태그이름을 변경하고 싶은데 적용 시 배경이 사라짐.  */}
      <SectionStyle dim>
        <TitleStyle as={headingLevel}>{title}</TitleStyle>
        <StrongTextStyle>{strongText}</StrongTextStyle>
        <SignUpStyle>{signUp}</SignUpStyle>
        <OurStoryPromotion />
        <PromotionTextStyle>{promotionText}</PromotionTextStyle>
      </SectionStyle>
    </ContainerStyle>
  )
}

export default OurStory
