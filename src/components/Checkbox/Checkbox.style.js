import styled from 'styled-components'
import { getColor } from 'utils'
import { getPublicAssets } from 'utils'

export const CheckboxWraperStyle = styled.div`
  position: relative;
  user-select: none;

  .checkbox::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 0;
    width: 1.2rem;
    height: 1.2rem;
    background: url(${getPublicAssets('checkbox_invalid.svg')}) no-repeat center /
      cover;
  }

  .checkbox {
    &:focus-within {
      &::before {
        box-shadow: 0 0 0 0.3rem ${getColor('focusVisible')};
      }
    }
  }
  .checked::before {
    background: url(${getPublicAssets('checkbox_valid.svg')}) no-repeat center /
      cover;
  }
`
CheckboxWraperStyle.displayName = 'CheckboxWraperStyle'

export const CheckboxLabelStyle = styled.label`
  cursor: pointer;
  font-size: 1.3rem;
  line-height: 1.35;
  color: ${getColor('lightGray')};
`
CheckboxLabelStyle.displayName = 'CheckboxLabelStyle'

export const CheckboxInputStyle = styled.input`
  margin-right: 0.5rem;
  opacity: 0;
`
CheckboxInputStyle.displayName = 'CheckboxInputStyle'
