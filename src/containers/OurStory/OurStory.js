import React, { useState, useEffect, useCallback } from 'react'
import { Background } from 'components'
import { isValidEmail } from 'utils'
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
    import('data/homeContext.json').then((module) => {
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
  const [detect, setDetect] = useState({
    valid: false,
    invalid: false,
  })

  // console.log(detect)
  const handleChange = useCallback((e) => {
    setValue(e.target.value)
  }, [])

  const handleDetect = useCallback(() => {
    if (!isValidEmail(value) && value.trim().length === 0) {
      setDetect({
        valid: false,
        invalid: false,
      })
    }
    if (!isValidEmail(value) && value.trim().length !== 0) {
      setDetect({
        valid: false,
        invalid: true,
      })
    }
    if (isValidEmail(value)) {
      setDetect({
        valid: true,
        invalid: false,
      })
    }
  }, [value])

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
          handleDetect={handleDetect}
          name="email"
          id="ourStoryEmail"
          {...detect}
        />
        <PromotionInfoStyle>{promotionInfo}</PromotionInfoStyle>
      </MainContainer>
    </Background>
  )
}

export default OurStory
