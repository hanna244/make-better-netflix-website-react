import Accordion from './Accordion'
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'Components/Home/Accordion',
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

const Template = (args) => <Accordion {...args} />

export const AccordionClose = Template.bind({})
AccordionClose.args = {
  question: '넷플릭스란 무엇인가요?',
}
AccordionClose.storyName = '아코디언(Close)'

export const AccordionOpen = Template.bind({})
AccordionOpen.args = {
  ...AccordionClose.args,
  open: true,
  showAnswer: true,
  answer: [
    '넷플릭스는 각종 수상 경력에 빛나는 TV 프로그램, 영화, 애니메이션, 다큐멘터리 등 다양한 콘텐츠를 인터넷 연결이 가능한 수천 종의 디바이스에서 시청할 수 있는 스트리밍 서비스입니다.',
    '저렴한 월 요금으로 일체의 광고 없이 원하는 시간에 원하는 만큼 즐길 수 있습니다. 무궁무진한 콘텐츠가 준비되어 있으며 매주 새로운 TV 프로그램과 영화가 제공됩니다.',
  ],
}
AccordionOpen.storyName = '아코디언(Open)'
