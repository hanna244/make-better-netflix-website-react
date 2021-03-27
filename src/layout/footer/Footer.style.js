import styled from 'styled-components'
import { resetList, resetPara } from '../../styles/common'
import { getColor } from '../../utils'
import { Definition } from './compound_components'

export const FooterStyle = styled.footer`
  color: ${getColor('gray')};

  p {
    ${resetPara}
    display:inline-block;
    margin-top: 4rem;
    font-weight: bold;
    font-size: 2rem;
    line-height: 1.4;

    @media (min-width: 60em) {
      margin-top: 5rem;
      line-height: 1.2;
    }
  }
  .linkBreak {
    @media (min-width: 60em) {
      display: none;
    }
  }
`
export const DefinitionStyle = styled(Definition)``

export const LinkListStyle = styled.ul`
  ${resetList}
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 16rem));

  @media (min-width: 60em) {
    grid-template-columns: repeat(4, 1fr);
  }
`
