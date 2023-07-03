import { render, waitFor, waitForElementToBeRemoved, screen } from '@testing-library/react'
import { CustomWorldMap } from "../components/charts/CustomWorldMap";

describe('CustomWorldMap', () => {
  it("renders properly", async () => {
    const { getByTestId } = render(
      <CustomWorldMap />
    );
    await waitFor(() => {
      expect(getByTestId("world-map")).toBeTruthy();
    });
  });
  
  test('shows a loading message which then disappears', async() => {
    render(<CustomWorldMap />);
    const loadingText = screen.getByText('Loading...');
    expect(loadingText).toBeInTheDocument();
  
    await waitForElementToBeRemoved(() => screen.getByText('Loading...'), {timeout: 75});
  });
})