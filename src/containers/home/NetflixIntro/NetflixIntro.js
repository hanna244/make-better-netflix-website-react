import React, { useRef, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { Merit } from '../../../components'
import meritData from '../../../data/merit.json'
import { resetPara } from '../../../styles/common'
import { getColor } from '../../../utils'
import styled from 'styled-components'
import {
  MediaWrapper,
  IntroVideo2,
  SmallMediaWrapper,
  IntroRwdImage,
} from '../../../components/Merit/Merit.style'

const SmallContextContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 2;
  justify-content: center;
  text-align: left;
`

const SmallContextTitle = styled.p`
  ${resetPara}
  font-weight: bold;
  font-size: 1rem;
  line-height: 1.2;

  @media (min-width: 60em) {
    font-size: 1.4rem;
  }
`

const SmallContextSubTitle = styled(SmallContextTitle)`
  font-size: 0.8rem;
  line-height: 1.5;
  color: ${getColor('blue')};

  @media (min-width: 60em) {
    font-size: 1.2rem;
  }
`

const NetflixIntro = () => {
  const video1Ref = useRef(null)
  const video2Ref = useRef(null)

  useEffect(() => {
    // 미디어 접근성을 위해 <video /> muted 속성 추가
    video1Ref.current.setAttribute('muted', '')
    video2Ref.current.setAttribute('muted', '')
  })

  return (
    <Merit.Container>
      {meritData.map(
        (
          {
            title,
            description,
            video,
            image,
            subImage: poster,
            icon: download,
            alt,
            emptyAlt,
            direction,
          },
          index
        ) => {
          console.log(index)
          return (
            <Merit key={uuid()} id={uuid()} direction={direction}>
              <Merit.Wrapper as="div">
                <Merit.Title children={title} />
                <Merit.SubTitle children={description} />
              </Merit.Wrapper>
              {/*MediaWrapper는 <Merit.Wrapper> 컴포넌트 재사용 및 스타일 확장하여 사용 */}
              {/* 미디어 래퍼 요소라서 figure요소를 사용하기 위해 as 속성 사용  */}
              <MediaWrapper as="figure">
                <IntroRwdImage
                  src={image}
                  alt={alt}
                  size={{
                    width: 338,
                    height: 254,
                  }}
                />
                {index === 1 ? (
                  <SmallMediaWrapper>
                    <Merit.IntroNomalImage
                      src={poster}
                      alt={emptyAlt}
                      size={{
                        width: 30,
                        height: 43,
                      }}
                    />
                    <SmallContextContainer>
                      <SmallContextTitle>기묘한 이야기</SmallContextTitle>
                      <SmallContextSubTitle as="span">
                        저장 중...
                      </SmallContextSubTitle>
                    </SmallContextContainer>
                    <Merit.IntroNomalImage
                      src={download}
                      alt={emptyAlt}
                      size={{
                        width: 33,
                        height: 33,
                      }}
                    />
                  </SmallMediaWrapper>
                ) : null}
                {index === 0 ? (
                  <Merit.IntroVideo
                    ref={video1Ref}
                    src={video}
                    size={{
                      width: 251,
                      height: 141,
                    }}
                  />
                ) : null}
                {index === 2 ? (
                  <IntroVideo2
                    ref={video2Ref}
                    src={video}
                    size={{
                      width: 251,
                      height: 141,
                    }}
                  />
                ) : null}
              </MediaWrapper>
            </Merit>
          )
        }
      )}
    </Merit.Container>
  )
}

export default NetflixIntro
