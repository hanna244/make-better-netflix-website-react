import SelectIcon from './SelectIcon'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/UI/SelectIcon',
  component: SelectIcon,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/OxqbFId2ufYIqjEimukwSD/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4(Netflix)?node-id=1%3A61',
    },
  },
}

const Template = (args) => <SelectIcon {...args} />

export const GlobalIcon = Template.bind({})
GlobalIcon.args = {
  type: 'global',
}
GlobalIcon.storyName = '셀렉 아이콘(global)'

export const ArrowIcon = Template.bind({})
ArrowIcon.args = {
  type: 'arrow',
}
ArrowIcon.storyName = '셀렉 아이콘(arrow)'
