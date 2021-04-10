import styled from 'styled-components'
import { Container, Background } from '../../components'

export const LogInContainer = styled(Container)`
  padding: 2rem 0;
  margin: 0 1.8rem;
`

export const LogInBackground = styled(Background)`
  background: #111;
  @media (min-width: 60em) {
    background: ${({ dim }) =>
      dim
        ? `linear-gradient(
      180deg,
      #000000 5.68%,
      rgba(0, 0, 0, 0.3) 42.95%,
      rgba(0, 0, 0, 0.8) 79.3%
    ),
    url('./assets/Cover.jpg') no-repeat center center`
        : "url('./assets/Cover.jpg') no-repeat center center"};
  }
`
