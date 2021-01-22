import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders leetcode stats title', () => {
  render(<App />)
  const titleElement = screen.getByText(/leetcode stats/i)
  expect(titleElement).toBeInTheDocument()
})
