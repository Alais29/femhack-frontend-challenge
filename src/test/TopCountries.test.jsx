import {
  render,
  waitFor,
  waitForElementToBeRemoved,
  screen,
} from '@testing-library/react'
import { TopCountries } from '../components/charts/TopCountries'
import { vi } from 'vitest'

vi.mock('react-chartjs-2')

describe('TopCountries', () => {
  it('renders properly', async () => {
    const { getByTestId } = render(<TopCountries />)
    await waitFor(() => {
      expect(getByTestId('pie-chart')).toBeTruthy()
    })
  })

  test('shows a loading message which then disappears', async () => {
    render(<TopCountries />)
    const loadingText = screen.getByText('Loading...')
    expect(loadingText).toBeInTheDocument()

    await waitForElementToBeRemoved(() => screen.getByText('Loading...'), {
      timeout: 1000,
    })
  })
})
