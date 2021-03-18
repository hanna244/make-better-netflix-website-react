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

export const parameters = {
  layout,
  backgrounds,
  viewport,
  controls,
  a11y,
  actions,
  docs,
}

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
