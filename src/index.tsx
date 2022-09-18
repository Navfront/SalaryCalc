import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/app'
import { Provider } from 'react-redux'
import { store } from './redux/store'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement as Element)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      </Provider>
  </React.StrictMode>
)
