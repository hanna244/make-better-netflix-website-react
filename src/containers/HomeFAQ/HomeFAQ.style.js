import styled from 'styled-components'
import { FAQ } from '..'
import { Container } from '../../components'
import { setFont } from '../../utils'

export const FAQContainerStyle = styled(Container)`
  display: flex;
  flex-flow: nowrap column;
  align-items: center;
  padding: 2rem 0;
  margin: 0 1.8rem;
`

export const Head = styled.h2`
  ${setFont(2.4, 1.2, 'bold')}

  @media (min-width: 60em) {
    ${setFont(4.8)}
  }
`

// 컴포넌트가 데스크탑 버전이기 때문에 60em 보다 작을 때, 스타일을 적용
export const FAQStyle = styled(FAQ)`
  @media (max-width: 60em) {
    div {
      width: 33.9rem;
    }
    dt {
      ${setFont(1.5, 1.2)}
      padding: 1.1rem;
    }

    img {
      width: 1.5rem;
      height: auto;
      top: 1.2rem;
      right: 1.2rem;
    }

    dd {
      ${setFont(1.3)}
      padding: 1.1rem;
    }
  }
`
