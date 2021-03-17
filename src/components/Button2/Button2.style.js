import styled from 'styled-components'

export const ButtonStyle = styled.button`
  cursor: pointer;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-width: 230px;
  border: 0;
  border-radius: 4px;
  padding: 0.777em 3.055em;
  text-align: center;
  text-decoration: none;
  font: bold 1.125rem/1.388 'Spoqa Han Sans Neo', 'Noto Sans', Sans-Serif;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
  background: ${({ primary, red, green }) => {
    return primary ? '#079bf5' : red ? '#ff0505' : green ? '#11a710' : null
  }};
`
