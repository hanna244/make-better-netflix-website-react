import React, { useRef, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import { Merit } from '../../../components'
import meritData from '../../../data/merit.json'

const NetflixIntro = () => {
  const videoRef = useRef(null)

  React.useEffect(() => {
    console.log('DOM 마운트 이후 시점')
    console.log(videoRef)
  })

  return (
    <Merit.Container>
      {meritData.map(
        ({ title, description, video, image, alt, direction }, index) => {
          console.log(video)
          return (
            <Merit direction={direction}>
              <Merit.Wrapper>
                <Merit.Title children={title} />
                <Merit.SubTitle children={description} />
              </Merit.Wrapper>
              <Merit.Wrapper>
                <Merit.IntroImage src={image} alt={alt} />
                <Merit.IntroVideo ref={videoRef} src={video} />
              </Merit.Wrapper>
            </Merit>
          )
        }
      )}
    </Merit.Container>
  )
}

export default NetflixIntro
