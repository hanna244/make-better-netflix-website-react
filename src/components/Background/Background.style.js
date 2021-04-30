import styled from 'styled-components'
import { getPublicAssets } from 'utils'

export const BackgroundStyle = styled.div`
  background: ${({ dim, path }) =>
    dim
      ? `linear-gradient(
      180deg,
      #000000 5.68%,
      rgba(0, 0, 0, 0.3) 42.95%,
      rgba(0, 0, 0, 0.8) 79.3%
    ),
    url(${getPublicAssets(path)}) center/cover no-repeat`
      : `url(${getPublicAssets(path)}) center/cover no-repeat`};
`
BackgroundStyle.displayName = 'BackgroundStyle'
