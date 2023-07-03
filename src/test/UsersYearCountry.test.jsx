import { render, waitFor, waitForElementToBeRemoved, screen } from '@testing-library/react'
import { UsersYearCountry } from '../components/charts/UsersYearCountry';
import { vi } from 'vitest';

vi.mock('react-chartjs-2');

describe('UsersYearCountry', () => {
  it("renders properly", async () => {
    const { getByTestId } = render(
      <UsersYearCountry />
    );
    await waitFor(() => {
      expect(getByTestId("line-chart")).toBeTruthy();
    });
  });
  
  test('shows a loading message which then disappears', async() => {
    render(<UsersYearCountry />);
    const loadingText = screen.getByText('Loading Chart...');
    expect(loadingText).toBeInTheDocument();
  
    await waitForElementToBeRemoved(() => screen.getByText('Loading Chart...'), {timeout: 1000});
  });
})