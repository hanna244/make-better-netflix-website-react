import Container from './Container'
import { withDesign } from 'storybook-addon-designs'
import Logo from '../Logo/Logo'

export default {
  title: 'Components/UI/Container',
  component: Container,
  decorators: [withDesign],
}

const Template = (args) => <Container {...args} />

export const NormalContainer = Template.bind({})
NormalContainer.args = {
  paddingVertical: 'auto',
  marginHorizon: 'auto',
  children: <Logo width="350" />,
}
NormalContainer.storyName = '컨테이너 버튼(normal)'
