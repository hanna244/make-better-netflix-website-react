import Frame from './Frame'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/UI/Frame',
  component: Frame,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/OxqbFId2ufYIqjEimukwSD/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4(Netflix)?node-id=125%3A134',
    },
  },
}

const Template = (args) => <Frame {...args} />

export const DeviceFrame = Template.bind({})
DeviceFrame.args = {
  type: 'tv',
}
DeviceFrame.storyName = '프레임(TV)'

export const DownloadFrame = Template.bind({})
DownloadFrame.args = {
  type: 'download',
}
DownloadFrame.storyName = '프레임(download)'

export const TVFrame = Template.bind({})
TVFrame.args = {
  type: 'device',
}
TVFrame.storyName = '프레임(device)'
