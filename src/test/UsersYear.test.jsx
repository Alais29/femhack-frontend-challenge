import { render, waitFor, waitForElementToBeRemoved, screen } from '@testing-library/react'
import { UsersYear } from '../components/charts/UsersYear';
import { vi } from 'vitest';

vi.mock('react-chartjs-2');

describe('UsersYear', () => {
  it("renders properly", async () => {
    const { getByTestId } = render(
      <UsersYear />
    );
    await waitFor(() => {
      expect(getByTestId("bar-chart")).toBeTruthy();
    });
  });
  
  test('shows a loading message which then disappears', async() => {
    render(<UsersYear />);
    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'), {timeout: 2000});
  });
})