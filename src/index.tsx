import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import Search from './Search'
import DirectSearch from './DirectSearch'
import PageNotFound from './PageNotFound'

import reportWebVitals from './reportWebVitals'
import {
  Routes,
  Route,
  BrowserRouter
} from 'react-router-dom'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="/search" element={<Search />} />
      <Route path="/query/:query" element={<DirectSearch />} />
      <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
