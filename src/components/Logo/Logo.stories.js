import Logo from './Logo'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/UI/Logo',
  component: Logo,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/OxqbFId2ufYIqjEimukwSD/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4(Netflix)?node-id=1%3A52',
    },
  },
}

const Template = (args) => <Logo {...args} />

export const NetflixLogo = Template.bind({})
NetflixLogo.args = {
  alt: '넷플릭스 로고',
}
NetflixLogo.storyName = '넷플릭스 로고'
