import styled from 'styled-components'
import { Container, Background } from 'components'
import { getPublicAssets } from 'utils'
import { themes } from 'styles/theme'

const {
  breakpoints: { lg },
} = themes

export const LogInContainer = styled(Container)`
  padding: 2rem 0;
  margin: 0 1.8rem;
`
LogInContainer.displayName = 'LogInContainer'

export const LogInBackground = styled(Background)`
  display: flex;
  justify-content: center;
  background: #111;

  @media (min-width: ${lg}em) {
    background: ${({ dim }) =>
      dim
        ? `linear-gradient(
      180deg,
      #000000 5.68%,
      rgba(0, 0, 0, 0.3) 42.95%,
      rgba(0, 0, 0, 0.8) 79.3%
    ),
    url(${getPublicAssets('Cover.jpg')}) no-repeat center center`
        : `url(${getPublicAssets('Cover.jpg')}) no-repeat center center`};
  }
`
LogInBackground.displayName = 'LogInBackground'
