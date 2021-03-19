import styled from 'styled-components'
import { resetButton, resetDl, resetImg, resetList } from '../../styles/common'
import { getColor } from '../../utils'

export const Item = styled.dl`
  ${resetDl}
  max-width: 90rem;
`
export const Head = styled.dt`
  position: relative;
  z-index: -10;
  padding: 2.1rem 3rem;
  font-size: 3.2rem;
  line-height: 1.2;
  background: ${getColor('darkGray')};
`
export const Body = styled(Head)`
  ${resetList}
  font-size: 2.6rem;
  line-height: 1.5;
`
export const OpenButton = styled.button`
  ${resetButton}
  position: absolute;
  z-index: 100;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: none;
`

export const PlusImg = styled.img`
  ${resetImg}
  position: absolute;
  width: 2.25rem;
  top: 20px;
  right: 30px;
  bottom: 20px;
`
