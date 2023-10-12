import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Layout from './components/Layout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Layout/>}>
      <Route index element = {<App/>}/>

      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
