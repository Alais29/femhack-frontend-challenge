import { render, screen } from '@testing-library/react'
import { App } from './src/App'

describe('Debe tener un H1', () => {
  it('renders headline', () => {
    render(<App />)
    const headline = screen.getByText(/It works and you found me!/i)
    expect(headline).toBeInTheDocument()
  })
})
