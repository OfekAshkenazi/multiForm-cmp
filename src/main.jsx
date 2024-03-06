import React from 'react'
import ReactDOM from 'react-dom/client'
import MultiForm from './MultiForm.jsx'
import './assets/styles/main.scss'
import { Provider } from 'react-redux'
import { store } from './store/store.js'


ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>

    <MultiForm />
  </Provider>

)
