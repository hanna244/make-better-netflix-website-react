const initState = {
  email: '',
  password: '',
  detect: {
    valid: false,
    invalid: false,
  },
}

export const inputReducer = (state = initState, { type, value, inputName }) => {
  switch (type) {
    case valueUpdate.name:
      // 구조 분해 할당을 하지 않았는데 어떻게 mianEmail, subEmail를 바로 사용할 수 있지?
      // return { ...state, [inputName]: value }
      return { ...state, email: value }

    case lengthZeroAction.name:
      return { ...state, invalid: false, valid: false }

    case invalidAction.name:
      return { ...state, invalid: false, valid: false }

    case validAction.name:
      return { ...state, invalid: false, valid: false }

    default:
      return state
  }
}

export const valueUpdate = (inputValue, name) => ({
  type: valueUpdate.name,
  value: inputValue,
  inputName: name,
})

export const lengthZeroAction = () => ({ type: lengthZeroAction.name })

export const invalidAction = () => ({ type: invalidAction.name })

export const validAction = () => ({ type: validAction.name })
