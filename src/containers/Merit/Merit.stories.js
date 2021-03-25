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
}
WatchOnTV.storyName = '메리트(Watch on TV)'
