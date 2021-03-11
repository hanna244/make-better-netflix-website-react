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
  })

  return (
    <Merit.Container>
      {meritData.map(
        ({ title, description, video, image, alt, direction }, index) => {
          console.log(index)
          return (
            <Merit key={uuid()} id={uuid()} direction={direction}>
              <Merit.Wrapper>
                <Merit.Title children={title} />
                <Merit.SubTitle children={description} />
              </Merit.Wrapper>
              <Merit.Wrapper>
                <Merit.IntroImage src={image} alt={alt} />
                {index === 0 ? (
                  <Merit.IntroVideo ref={video1Ref} src={video} />
                ) : null}
                {index === 2 ? (
                  <Merit.IntroVideo ref={video2Ref} src={video} />
                ) : null}
              </Merit.Wrapper>
            </Merit>
          )
        }
      )}
    </Merit.Container>
  )
}

export default NetflixIntro
