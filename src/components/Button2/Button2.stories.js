import React from 'react'
import Button2 from './Button2'
import Center from '../Center/Center'

export default {
  title: 'Form/Button2',
  component: Button2,
}

export const Primary = () => (
  <Center>
    <Button2 primary>Primary</Button2>
  </Center>
)
export const RedButton = () => (
  <Center>
    <Button2 red>Red</Button2>
  </Center>
)
export const GreenButton = () => (
  <Center>
    <Button2 green>Green</Button2>
  </Center>
)
