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
                {/* 오류 해결 : 대체 텍스트는 {}객체로 전달이 안된다. 즉, 데이터 바인딩이 안된다. */}
                <img src={image} alt={alt} />
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
