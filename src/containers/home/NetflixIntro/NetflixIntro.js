import React, { useRef, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { Merit } from '../../../components'
import meritData from '../../../data/merit.json'

import {
  MediaWrapper,
  IntroVideo2,
  SmallMediaWrapper,
} from '../../../components/Merit/Merit.style'
import {
  MainImg,
  SubImg,
  SmallContextContainer,
  SmallContextTitle,
  SmallContextSubTitle,
} from './NetflixIntro.style'

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
                <MainImg
                  rwd
                  src={image}
                  alt={alt}
                  size={{
                    width: 338,
                    height: 254,
                  }}
                />
                {index === 1 ? (
                  <SmallMediaWrapper>
                    <SubImg
                      widewidth="6rem"
                      marginleft="1.2rem"
                      widemarginleft="1.6rem"
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
                    <SubImg
                      widewidth="6.3rem"
                      paddingright="1.1rem"
                      widepaddingright="1.6rem"
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
