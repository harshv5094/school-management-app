import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import store from './app/store.js'
import App from './App.jsx'
import './index.css'
import ChakraUI from './components/chakra';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraUI>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ChakraUI>
  </React.StrictMode>,
)
