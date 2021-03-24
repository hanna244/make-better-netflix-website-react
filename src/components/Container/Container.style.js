import styled from 'styled-components'

export const ContainerStyle = styled.div`
  // padding vertical
  padding-top: ${({ paddingVertical }) =>
    paddingVertical ? paddingVertical : null};
  padding-bottom: ${({ paddingVertical }) =>
    paddingVertical ? paddingVertical : null};
  // margin horizon
  margin-left: ${({ marginHorizon }) => (marginHorizon ? marginHorizon : null)};
  margin-right: ${({ marginHorizon }) =>
    marginHorizon ? marginHorizon : null};
`
