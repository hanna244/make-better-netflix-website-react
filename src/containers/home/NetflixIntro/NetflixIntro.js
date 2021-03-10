import React from 'react'
import { v4 as uuid } from 'uuid'
import { Merit } from '../../../components'
import meritData from '../../../data/merit.json'

const NetflixIntro = () => {
  return (
    <Merit.Container>
      {meritData.map(({ title, description, video, image, alt, direction }) => {
        return (
          <Merit direction={direction}>
            <Merit.TextWrapper>
              <Merit.Title children={title} />
              <Merit.SubTitle children={description} />
            </Merit.TextWrapper>
            <Merit.MediaWrapper>
              <Merit.IntroImage src={image} alt={alt} />
              <Merit.IntroVideo src={video} />
            </Merit.MediaWrapper>
          </Merit>
        )
      })}
    </Merit.Container>
  )
}

export default NetflixIntro
