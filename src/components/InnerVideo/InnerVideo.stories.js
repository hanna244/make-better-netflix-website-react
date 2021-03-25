import InnerVideo from './InnerVideo'

export default {
  title: 'Components/UI/InnerVideo',
  component: InnerVideo,
}

const Template = (args) => <InnerVideo {...args} />

export const DeviceVideo = Template.bind({})
DeviceVideo.args = {
  type: 'tv',
}
DeviceVideo.storyName = '비디오(TV)'

export const TVVideo = Template.bind({})
TVVideo.args = {
  type: 'device',
}
TVVideo.storyName = '비디오(device)'
