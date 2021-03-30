// CSS
// font-size와 line-height 속성을 동적으로 설정하는 유틸리티 함수
// 각 단위는 설정이 되어있기 때문에 값만 입력하면 된다.

function setFont(size, height = null, weight = null) {
  return `
    ${size ? `font-size: ${size}rem;` : ''}
    ${height ? `line-height: ${height};` : ''}
    ${weight ? `font-weight: ${weight};` : ''}
  `
}

export default setFont
