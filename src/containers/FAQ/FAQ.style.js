import styled from 'styled-components'
import { resetDl } from '../../styles/common'

export const List = styled.dl`
  ${resetDl}

  button {
    width: 98.5%;
    top: 1px;
    left: 3px;
    bottom: 1px;

    @media (min-width: 60em) {
      width: 99.5%;
    }
  }
`

List.displayName = 'List'
