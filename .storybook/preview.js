import React from 'react'
import { GlobalStyles } from '../src/styles/GlobalStyles'

import {
  layout,
  backgrounds,
  viewport,
  a11y,
  localization,
  controls,
  actions,
  docs,
} from './config'

export const globalTypes = localization

// 클로벌 스타일 적용
export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
]

const customViewports = {
  netflixSmall: {
    name: 'netflix small',
    styles: {
      width: '640px',
      height: '960px',
    },
  },
  netflixLarge: {
    name: 'netflix large',
    styles: {
      width: '960px',
      height: '1440px',
    },
  },

  netflixXLarge: {
    name: 'netflix X large',
    styles: {
      width: '1440px',
      height: '960px',
    },
  },
}

export const parameters = {
  // padding: 1rem 제거
  layout: 'fullscreen',
  // 커스텀 뷰포드 설정
  viewport: { viewports: customViewports },
  backgrounds,
  controls,
  a11y,
  actions,
  docs,
}
