const initState = {
  isOpen: false,
  currentIndex: 0,
}

export const faqReducer = (state = initState, action) => {
  switch (action.type) {
    case currentNumber.name:
      return {
        ...state,
        currentIndex: action.payload,
      }
    case accordionIsOpen.name:
      return {
        ...state,
        isOpen: !state.isOpen,
      }

    default:
      return state
  }
}

export const currentNumber = (index) => ({
  type: currentNumber.name,
  payload: index,
})

export const accordionIsOpen = () => ({
  type: accordionIsOpen.name,
})
