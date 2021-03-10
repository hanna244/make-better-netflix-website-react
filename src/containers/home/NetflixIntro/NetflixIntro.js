import React, { useRef, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { Merit } from '../../../components'
import meritData from '../../../data/merit.json'

const NetflixIntro = () => {
  const video1Ref = useRef(null)
  const video2Ref = useRef(null)

  useEffect(() => {
    console.log('DOM 마운트 이후 시점')
    console.log(video1Ref)
    console.log(video2Ref)
  }, [])

  return (
    <Merit.Container>
      {meritData.map(
        ({ title, description, video, image, alt, direction }, index) => {
          console.log(video)
          return (
            <Merit key={uuid()} id={uuid()} direction={direction}>
              <Merit.Wrapper>
                <Merit.Title children={title} />
                <Merit.SubTitle children={description} />
              </Merit.Wrapper>
              <Merit.Wrapper>
                <Merit.IntroImage src={image} alt={alt} />
                <Merit.IntroVideo
                  ref={[
                    video?.indexOf('video-tv-0819') !== -1 ? video1Ref : null,
                    video?.indexOf('video-devices') !== -1 ? video2Ref : null,
                  ]}
                  // ref={video.indexOf?.('m4v') !== -1 ? videoRef : null}
                  src={video}
                />
              </Merit.Wrapper>
            </Merit>
          )
        }
      )}
    </Merit.Container>
  )
}

export default NetflixIntro
