function getColor(color) {
  switch (color) {
    case 'red':
      return '#E50914'
    case 'vividRed':
      return '#FF000D'
    case 'blue':
      return '#0071EB'
    case 'focusVisible':
      return '#2EDE75'
    case 'black':
      return '#010101'
    case 'darkGray':
      return '#303030'
    case 'gray':
      return '#757575'
    case 'lightGray':
      return '#B5B5B5'
    case 'white':
      return '#FFFFFF'
    default:
      return console.log(
        '해당 색상은 선택 사항에 없습니다. 색상을 다시 확인해 주세요'
      )
  }
}
export default getColor
