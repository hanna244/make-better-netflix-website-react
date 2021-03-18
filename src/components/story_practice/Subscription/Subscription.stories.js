import React from 'react'
import { Primary } from '../../Button2/Button2.stories'
import { Medium } from '../../Input/Input.stories'

export default {
  title: 'Form/container/Subscription',
}

export const PrimarySubscription = () => {
  return (
    <>
      <Primary />
      <Medium />
    </>
  )
}
