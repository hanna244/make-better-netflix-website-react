import Accordion from './Accordion'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/Accordion/Accordion',
  component: Accordion,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url:
        'https://www.figma.com/file/OxqbFId2ufYIqjEimukwSD/%EB%84%B7%ED%94%8C%EB%A6%AD%EC%8A%A4(Netflix)?node-id=125%3A112',
    },
  },
}

const Template = (args) => (
  <div style={{ margin: 30 }}>
    {' '}
    <Accordion {...args} />
    <Accordion {...args} />
    <Accordion {...args} />
    <Accordion {...args} />
    <Accordion {...args} />
  </div>
)

export const AccordionClose = Template.bind({})
AccordionClose.args = {
  question: '이곳에 질문을 입력하세요',
  answer: ['이곳에 답변을 입력하세요'],
}
AccordionClose.storyName = '아코디언(Close)'

export const AccordionOpen = Template.bind({})
AccordionOpen.args = {
  ...AccordionClose.args,
  isOpen: true,
  currentIndex: 0,
  id: 0,
}
AccordionOpen.storyName = '아코디언(Open)'
