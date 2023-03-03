import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/header'
import { Provider } from 'react-redux'
import { store } from './app/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
    </Provider>
  </React.StrictMode>,
)
