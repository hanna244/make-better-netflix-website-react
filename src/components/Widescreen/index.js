import React from 'react'
import { v4 as uuid } from 'uuid'
import widescreen from '../../data/widescreen.json'

const Widescreen = () => {
  return (
    <div>
      {widescreen.map(
        ({ direction, title, description, image, alt, video }) => {
          return (
            <article key={uuid()} id={uuid()} direction={direction}>
              <h3>{title}</h3>
              <p>{description}</p>
              <div>
                {/* 오류 : https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/master/docs/rules/alt-text.md */}
                {/* <img src={image} art={alt} /> */}
                <video src={video}></video>
              </div>
            </article>
          )
        }
      )}
    </div>
  )
}

export default Widescreen
