import React from 'react'
import Button2 from './Button2'

export default {
  title: 'Button2',
  component: Button2,
}

export const primary = () => <Button2 primary>Primary</Button2>
export const RedButton = () => <Button2 red>Red</Button2>
export const GreenButton = () => <Button2 green>Green</Button2>
