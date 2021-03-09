import { css } from 'styled-components'

const resetBox = css`
  margin: 0;
  border: 0;
  padding: 0;
`
const resetLink = css`
  text-decoration: none;
  color: inherit;
`
const resetList = css`
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 0;
  list-style-type: none;
  // 아래 속성은 커스텀 리셋 속성
  list-style: none;
  margin-left: 0;
  margin-right: 0;
`

const resetDl = css`
  margin-top: 0;
  margin-bottom: 0;

  dd {
    margin-left: 0;
  }
`

const rwdImg = css`
  max-width: 100%;
  height: auto;
`

const rwdVideo = css`
  max-width: 100%;
  height: auto;
`

const rwdIframeWrapper = css`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 56const 25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const a11yHidden = css`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  clip-path: circle(0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;

  /* 화면에 a11y 요소가 보이지 않더라도 포커스 되었을 때 보이기 때문에 포커스 상태에도 감춰질 수 있도록 한다. */
  &:focus {
    overflow: inherit;
    position: inherit;
    clip: inherit;
    clip-path: inherit;
    width: inherit;
    margin: inherit;
    border: inherit;
    padding: inherit;
    white-space: inherit;
  }
`
// 커스텀 reset

const resetButton = css`
  border: 0;
`

const resetAddress = css`
  font-style: normal;
`

export {
  resetBox,
  resetLink,
  resetList,
  resetDl,
  rwdImg,
  rwdVideo,
  rwdIframeWrapper,
  resetButton,
  resetAddress,
  a11yHidden,
}
