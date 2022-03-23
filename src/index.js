import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import store from './store'
import { Provider } from 'react-redux'
// #2a7096 - primary color
// #fdd835 - secondary color

import { createTheme, ThemeProvider } from '@mui/material/styles'

// Theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2a7096',
    },
    secondary: {
      main: '#fdd835',
    },
  },
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
