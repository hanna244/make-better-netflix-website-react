import styled from 'styled-components'
import { resetList } from '../../styles/common'
import { getColor } from '../../utils'
import { Definition } from './compound_components'

export const FooterStyle = styled.footer`
  color: ${getColor('gray')};
`
export const DefinitionStyle = styled(Definition)`
  p {
    margin-top: 4rem;

    @media (min-width: 60em) {
      margin-top: 5rem;
      line-height: 1.2;
    }
  }
`

export const LinkListStyle = styled.ul`
  ${resetList}
  display: grid;
  grid-template-columns: repeat(2, auto);
`
