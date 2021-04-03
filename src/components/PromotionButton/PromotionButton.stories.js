import PromotionButton from './PromotionButton'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/From/Button',
  component: PromotionButton,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/OxqbFId2ufYIqjEimukwSD/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4(Netflix)?node-id=125%3A97',
    },
  },
  argTypes: {
    fgColor: { control: 'color' },
    bgColor: { control: 'color' },
    onClick: { action: '버튼 클릭!' },
  },
}

const Template = (args) => (
  <div style={{ margin: 30 }}>
    {' '}
    <PromotionButton {...args} />
  </div>
)

export const PromotionNormalButton = Template.bind({})
PromotionNormalButton.args = {
  label: '30일 무료 이용',
}
PromotionNormalButton.storyName = '프로모션 버튼(normal)'

export const PromotionHoverButton = Template.bind({})
PromotionHoverButton.args = {
  ...PromotionNormalButton.args,
  hover: true,
}
PromotionHoverButton.storyName = '프로모션 버튼(hover)'
