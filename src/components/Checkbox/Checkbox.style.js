import styled from 'styled-components'
import { getColor } from 'utils'
import { getPublicAssets } from 'utils'

export const CheckboxWraper = styled.div`
  position: relative;
  .checkbox::before {
    content: '';
    position: absolute;
    top: 3px;
    left: 0;
    width: 1.1rem;
    height: 1.1rem;
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
CheckboxWraper.displayName = 'CheckboxWraper'

export const CheckboxLabel = styled.label`
  cursor: pointer;
  font-size: 1.3rem;
  line-height: 1.35;
  color: ${getColor('lightGray')};
`
CheckboxLabel.displayName = 'CheckboxLabel'

export const CheckboxInput = styled.input`
  margin-right: 0.5rem;
  opacity: 0;
`
CheckboxInput.displayName = 'CheckboxInput'
