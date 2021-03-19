import Background from './Background'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/UI/Background',
  component: Background,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/OxqbFId2ufYIqjEimukwSD/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4(Netflix)?node-id=1%3A66',
    },
  },
}

const Template = (args) => <Background {...args} />

export const NetflixBackground = Template.bind({})
NetflixBackground.args = {}
NetflixBackground.storyName = '배경(normal)'
