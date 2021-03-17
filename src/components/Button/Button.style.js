import styled from 'styled-components'

const { fg, bg, disabled_fg, disabled_bg } = {
  fg: '#fff',
  bg: '#0074e9',
  disabled_fg: '#d4e0ed',
  disabled_bg: '#97aabd',
}

export const Button = styled.button`
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

  &[disabled] {
    cursor: not-allowed;
  }
`

export const Primary = styled(Button)`
  background: ${bg};
  color: ${fg};
  &[disabled] {
    background: ${disabled_bg};
    color: ${disabled_fg};
  }
`

export const secondary = styled(Button)`
  background: ${fg};
  color: ${bg};
  &[disabled] {
    background: ${disabled_fg};
    color: ${disabled_bg};
  }
`
