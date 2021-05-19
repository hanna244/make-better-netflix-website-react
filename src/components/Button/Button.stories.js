import Button from './Button'
import { withDesign } from 'storybook-addon-designs'
import { getColor } from 'utils'

export default {
  title: 'Components/From/Button',
  component: Button,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/OxqbFId2ufYIqjEimukwSD/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4(Netflix)?node-id=125%3A96',
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
    <Button {...args} />
  </div>
)

export const RouteNormalButton = Template.bind({})
RouteNormalButton.args = {
  label: '로그인',
}
RouteNormalButton.storyName = '링크 버튼(normal)'

export const RouteHoverButton = Template.bind({})
RouteHoverButton.args = {
  ...RouteNormalButton.args,
  style: { background: `${getColor('vividRed')}` },
}
RouteHoverButton.storyName = '링크 버튼(hover)'

export const RouteFocusButton = Template.bind({})
RouteFocusButton.args = {
  ...RouteNormalButton.args,
  style: { boxShadow: `0 0 0 0.3rem ${getColor('focusVisible')}` },
}
RouteFocusButton.storyName = '링크 버튼(focus)'
