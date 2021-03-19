import styled from 'styled-components'
import {
  resetButton,
  resetDl,
  resetImg,
  resetList,
  rwdImg,
} from '../../styles/common'
import { getColor } from '../../utils'

export const Item = styled.dl`
  ${resetDl}
  max-width: 90rem;
`
export const Head = styled.dt`
  position: relative;
  padding: 2.1rem 3rem;
  border: solid ${getColor('black')};
  border-width: 0.1rem 0;
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
  display: flex;
  width: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0;
  background: none;
`

export const PlusImg = styled.img`
  ${resetImg}
  position: absolute;
  top: 12px;
  bottom: 12px;
  right: 12px;
  width: 0.85rem;
  height: auto;
`
