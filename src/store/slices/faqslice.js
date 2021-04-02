const initState = {
  isOpen: false,
}

export const faqReducer = (state = initState, action) => {
  switch (action.type) {
    case open.name:
      return {
        ...state,
        isOpen: true,
      }

    case close.name:
      return {
        ...state,
        isOpen: false,
      }

    default:
      break
  }
}

export const open = () => ({
  type: open.name,
})
export const close = () => ({
  type: close.name,
})
