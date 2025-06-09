import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import './main.scss'
import App from './App.jsx'

// Entry point: Wraps the App in Redux Provider and StrictMode, then mounts to #root
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
