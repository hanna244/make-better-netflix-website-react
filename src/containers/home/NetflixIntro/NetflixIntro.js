import React, { useRef, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { Merit } from '../../../components'
import meritData from '../../../data/merit.json'
import {
  MediaWrapper,
  IntroVideo2,
} from '../../../components/Merit/Merit.style'

const NetflixIntro = () => {
  const video1Ref = useRef(null)
  const video2Ref = useRef(null)

  useEffect(() => {
    console.log('DOM 마운트 이후 시점')
    console.log(video1Ref)
    console.log(video2Ref)
  })

  return (
    <Merit.Container>
      {meritData.map(
        ({ title, description, video, image, alt, direction }, index) => {
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
                <Merit.IntroImage src={image} alt={alt} />
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
