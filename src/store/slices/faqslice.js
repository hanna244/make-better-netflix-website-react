const initState = {
  currentIndex: null,
}

export const faqReducer = (state = initState, action) => {
  switch (action.type) {
    case currentNumber.name:
      return {
        ...state,
        currentIndex: action.payload,
      }

    default:
      return state
  }
}

export const currentNumber = (index) => ({
  type: currentNumber.name,
  payload: index,
})
