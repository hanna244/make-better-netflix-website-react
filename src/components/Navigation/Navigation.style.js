import styled from 'styled-components'
import { resetLink, resetList } from 'styles/common'
import { getColor } from 'utils'
import { NavLink } from 'react-router-dom'

export const NavStyle = styled.div`
  ${resetList}
  display: flex;
  flex-flow: row nowrap;
  font-size: 1.5rem;
  color: ${getColor('lightGray')};
`
NavStyle.displayName = 'NavStyle'

export const NavLinkStyle = styled(NavLink)`
  ${resetLink}
  margin-right: 1.8rem;

  :hover {
    color: ${getColor('white')};
  }
`
NavLinkStyle.displayName = 'NavLinkStyle'
