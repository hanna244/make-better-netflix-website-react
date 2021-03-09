import Link from './Link'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

/* ------------------------------------------------------------------- */

const link = {
  // 컴포넌트 설명을 입력하면 Storybook에 카테고리 되어 표시됩니다.
  title: '넷플릭스/Button/Link',
  // 데코레이터 설정
  decorators: [withKnobs],
  // 컴포넌트 설정
  component: Link,
  // 전달 인자 유형 설정
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  // 전달인자 설정
  args: {
    label: '로그인',
  },
  parameters: {
    // 뷰포트 애드온 설정
    viewport: {
      viewports: INITIAL_VIEWPORTS,
      // iPhoneX,XR 만 추출
      defaultViewport: ['iphone6', 'iPad'],
    },
  },
}

export default link

// 컴포넌트 템플릿
// 함수의 복사본을 만드는 표준 JavaScript 기법
const Template = (args) => <Link {...args} />

// sm 사이즈 컴포넌트
export const SmSize = Template.bind({})
SmSize.storyName = 'Small'
SmSize.args = {
  id: 'sm-size-idns1',
  size: 'sm',
}
SmSize.parameters = {
  viewport: {
    defaultViewport: 'iphone6',
  },
}

// md 사이즈 컴포넌트
export const MdSize = Template.bind({})
MdSize.storyName = 'Medium'
MdSize.args = {
  id: 'md-size-idns5',
  size: 'md',
}
MdSize.parameters = {
  viewport: {
    defaultViewport: 'iPad',
  },
}

// lg 사이즈 컴포넌트
export const LgSize = Template.bind({})
LgSize.storyName = 'Large'
LgSize.args = {
  id: 'lg-size-idns8',
  size: 'lg',
}
