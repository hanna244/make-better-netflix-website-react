import styled from 'styled-components'
import { getColor, getPublicAssets } from 'utils'
import { themes } from 'styles/theme'
import {
  DropdownCommonListStyle,
  CommonNavButtonStyle,
  DropdownCommonButtonStyle,
} from 'styles/customCommon'
import { resetButton, resetImg } from 'styles/common'

const {
  breakpoints: { lg },
} = themes

export const ProfileContainerStyle = styled(CommonNavButtonStyle)`
  position: relative;
`
ProfileContainerStyle.displayName = 'ProfileContainerStyle'

export const NavHeaderProfileStyle = styled(CommonNavButtonStyle)`
  &::after {
    background: url(${getPublicAssets('profile-arrow.svg')}) no-repeat -0.2px -2px/96%;
    width: 1rem;
    height: 0.5rem;
    margin-left: 1rem;
  }
`
NavHeaderProfileStyle.displayName = 'NavHeaderProfileStyle'

export const ProfileImgStyle = styled.img`
  ${resetImg}
  width: 3.2rem;
`
ProfileImgStyle.displayName = 'ProfileImgStyle'

export const DropdownContainerStyle = styled(DropdownCommonListStyle)`
  top: 65px;
  padding: 1.7rem 0;
  border: 1px solid rgba(255, 255, 255, 0.15);
  max-width: 17.9rem;
  color: ${getColor('white')};
  text-align: left;

  &::before {
    top: -17px;
    right: 13px;
  }

  @media (min-width: ${lg}em) {
    &::before {
      content: '';
    }
  }
`
DropdownContainerStyle.displayName = 'DropdownContainerStyle'

export const DropdownFigureStyle = styled.figure`
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  padding: 0 1rem 1.2rem 1rem;
  align-items: center;
`
DropdownFigureStyle.displayName = 'DropdownFigureStyle'

export const DropdownProfileImgStyle = styled(ProfileImgStyle)`
  margin-right: 1rem;
`
DropdownProfileImgStyle.displayName = 'DropdownProfileImgStyle'

export const DropdownProfileButtonStyle = styled(DropdownCommonButtonStyle)`
  width: 100%;
  position: relative;
  padding: 0 1rem 1.2rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  text-align: left;
`
DropdownProfileButtonStyle.displayName = 'DropdownProfileButtonStyle'

export const DropdownLogoutButtonStyle = styled(DropdownCommonButtonStyle)`
  padding: 1.7rem 1rem 0 1rem;
`
DropdownLogoutButtonStyle.displayName = 'DropdownLogoutButtonStyle'
