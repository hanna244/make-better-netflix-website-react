import styled from 'styled-components'

export const BackgroundStyle = styled.div`
  background: linear-gradient(
      180deg,
      #000000 5.68%,
      rgba(0, 0, 0, 0.3) 42.95%,
      rgba(0, 0, 0, 0.8) 79.3%
    ),
    url('./assets/Cover.jpg') no-repeat center center;
  /* storybook에 보이게 하기 위해 임의로 높이 값 설정  */
  height: 261vh;
`
