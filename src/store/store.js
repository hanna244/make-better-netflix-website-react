import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { inputReducer } from './slices/inputslice'
import { faqReducer } from './slices/faqslice'

const rootReducer = combineReducers({
  userInput: inputReducer,
  curious: faqReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
