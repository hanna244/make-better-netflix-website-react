import styled from 'styled-components'
import { a11yHidden } from '../../styles/common.js'
import AppContainer from '../AppContainer/AppContainer.style.js'

export const FormContainer = styled(AppContainer)``

export const Title = styled.label`
  ${({ a11y }) => (a11y ? a11yHidden : null)}
`

export const UserInfo = styled.input``
