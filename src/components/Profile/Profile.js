import React from 'react'
import { PropTypes } from 'prop-types'
import { getPublicAssets } from 'utils'
import {
  NavHeaderProfileStyle,
  ProfileImgStyle,
  ProfileContainerStyle,
  DropdownContainerStyle,
  DropdownFigureStyle,
  DropdownProfileImgStyle,
  DropdownProfileButtonStyle,
  DropdownLogoutButtonStyle,
} from './Profile.style'

const Profile = ({ showMemu, ...restProps }) => {
  return (
    <ProfileContainerStyle {...restProps}>
      <NavHeaderProfileStyle type="button">
        <ProfileImgStyle
          src={`${getPublicAssets('profile.png')}`}
          alt="사용자 프로필"
        />
      </NavHeaderProfileStyle>
      {showMemu ? (
        <DropdownContainerStyle>
          {/* 확인: 임시 이미지와 이름 설정 */}
          <DropdownFigureStyle aria-label="현재 넷플릭스를 이용 중인 사용자">
            <DropdownProfileImgStyle
              src={`${getPublicAssets('profile.png')}`}
              alt="사용자 프로필"
            />
            <figcaption>김한나</figcaption>
          </DropdownFigureStyle>
          <DropdownProfileButtonStyle type="button">
            프로필 관리
          </DropdownProfileButtonStyle>
          <DropdownLogoutButtonStyle type="button">
            Netflix에서 로그아웃
          </DropdownLogoutButtonStyle>
        </DropdownContainerStyle>
      ) : null}
    </ProfileContainerStyle>
  )
}

Profile.defaultProps = {
  showMemu: false,
}

Profile.propTypes = {}

export default Profile
