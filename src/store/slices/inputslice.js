const initState = {
  email: '',
  password: '',
  detect: {
    valid: false,
    invalid: false,
  },
}

export const inputReducer = (state = initState, action) => {
  switch (action.type) {
    case emailValueUpdate.name:
      // 구조 분해 할당을 하지 않았는데 어떻게 mianEmail, subEmail를 바로 사용할 수 있지?
      return { ...state, [action.inputName]: action.value }

    case lengthZeroAction.name:
      return { ...state, invalid: false, valid: false }

    case invalidAction.name:
      return { ...state, invalid: false, valid: true }

    case validAction.name:
      return { ...state, invalid: false, valid: true }

    default:
      return state
  }
}

export const emailValueUpdate = (inputValue, inputName) => ({
  type: emailValueUpdate.name,
  value: inputValue,
  inputName: inputName,
})

export const lengthZeroAction = () => ({ type: lengthZeroAction.name })

export const invalidAction = () => ({ type: invalidAction.name })

export const validAction = () => ({ type: validAction.name })
