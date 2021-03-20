import Favicon from './Favicon'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/UI/Favicon',
  component: Favicon,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/OxqbFId2ufYIqjEimukwSD/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4(Netflix)?node-id=1%3A54',
    },
  },
}

const Template = (args) => <Favicon {...args} />

export const Favi = Template.bind({})
Favi.args = {
  alt: '넷플릭스 파비콘',
}
Favi.storyName = '넷플릭스 파비콘(favicon)'
