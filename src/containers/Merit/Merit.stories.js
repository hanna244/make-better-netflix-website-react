import Merit from './Merit'

export default {
  title: 'Containers/Home/Merit',
  component: Merit,
}

const Template = (args) => <Merit {...args} />

export const WatchOnTV = Template.bind({})
WatchOnTV.args = {
  heading: 'TV로 즐기세요.',
  description:
    '스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.',

  // video: './assets/video-tv-0819.m4v',
}
WatchOnTV.storyName = 'Watch on TV'

export const DownloadAndWatch = Template.bind({})
DownloadAndWatch.args = {
  ...WatchOnTV.args,
  type: 'download',
}
DownloadAndWatch.storyName = 'Download and Watch'

export const WatchOnDevice = Template.bind({})
WatchOnDevice.args = {
  ...WatchOnTV.args,
  type: 'device',
}
WatchOnDevice.storyName = 'Watch on Device'
