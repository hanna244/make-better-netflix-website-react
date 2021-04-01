const initState = {
  email: { mainEmail: '', subEmail: '' },
  password: '',
  detect: {
    valid: false,
    invalid: false,
  },
}

export const inputReducer = (state = initState, { type, value }) => {
  switch (type) {
    case mainEmailvalueUpdate.name:
      // 구조 분해 할당을 하지 않았는데 어떻게 mianEmail, subEmail를 바로 사용할 수 있지?
      return { ...state, mainEmail: value }

    case subEmailvalueUpdate.name:
      return { ...state, subEmail: value }

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

export const mainEmailvalueUpdate = (inputValue) => ({
  type: mainEmailvalueUpdate.name,
  value: inputValue,
})
export const subEmailvalueUpdate = (inputValue) => ({
  type: subEmailvalueUpdate.name,
  value: inputValue,
})

export const lengthZeroAction = () => ({ type: lengthZeroAction.name })

export const invalidAction = () => ({ type: invalidAction.name })

export const validAction = () => ({ type: validAction.name })
