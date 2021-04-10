import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { store } from './store/store'

import { BrowserRouter as Router } from 'react-router-dom'

import { DataContext } from './context/context'
import addressData from './data/address.json'
import faqData from './data/faq.json'
import footerLinkData from './data/footerLink.json'
import homeContextData from './data/homeContext.json'
import meritData from './data/merit.json'

import { GlobalStyles } from './styles/GlobalStyles'
import './styles/normalize.css'
import App from './App/App'

ReactDOM.render(
  <React.StrictMode>
    <DataContext.Provider
      value={{
        addressData: addressData,
        faqData: faqData,
        footerLinkData: footerLinkData,
        homeContextData: homeContextData,
        meritData: meritData,
      }}
    >
      <Provider store={store}>
        <GlobalStyles />
        <Router>
          <App />
        </Router>
      </Provider>
    </DataContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// 서비스 워커 설정
if (process.env.NODE_ENV === 'production') {
  import('./serviceWorker')
    .then((serviceWorker) => serviceWorker.register)
    .catch((error) => console.error(error.message))
}
