/* eslint-disable no-undef */
import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

test('renders @360macky text', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
  const linkElement = screen.getByText(/@360macky/i)
  expect(linkElement).toBeInTheDocument()
})
