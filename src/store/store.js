import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { faqReducer } from './slices/faqslice'

const rootReducer = combineReducers({
  curious: faqReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
