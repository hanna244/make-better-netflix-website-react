import Merit from './Merit'
import { classNames } from 'classnames'

export default {
  title: 'Containers/Merit/Merit',
  component: Merit,
}

const Template = (args) => (
  <div style={{ margin: 50 }}>
    <Merit {...args} />
  </div>
)

export const WatchOnTV = Template.bind({})
WatchOnTV.args = {
  heading: 'TV로 즐기세요.',
  description:
    '스마트 TV, PlayStation, Xbox, Chromecast, Apple TV, 블루레이 플레이어 등 다양한 디바이스에서 시청하세요.',
}
WatchOnTV.storyName = '티비(Watch on TV)'

export const DownloadAndWatch = Template.bind({})
DownloadAndWatch.args = {
  heading: '즐겨 보는 콘텐츠를 저장해 오프라인으로 시청하세요.',
  description: '간편하게 저장하고 빈틈없이 즐겨보세요.',
  imageType: 'download',
  videoType: 'noVideo',
  direction: 'row-reverse',
  classNames: 'download',
  downloadContent: true,
}
DownloadAndWatch.storyName = '다운로드(Download and Watch)'

export const WatchOnDevice = Template.bind({})
WatchOnDevice.args = {
  heading: '다양한 디바이스에서 시청하세요.',
  description:
    '각종 영화와 TV 프로그램을 스마트폰, 태블릿, 노트북, TV에서 무제한으로 스트리밍하세요. 추가 요금이 전혀 없습니다.',
  imageType: 'device',
  videoType: 'device',
  classNames: 'device',
}
WatchOnDevice.storyName = '디바이스(Watch on Device)'
