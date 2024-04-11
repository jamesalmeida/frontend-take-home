import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';

test('Renders NPM search input and error testing button', () => {
  render(<App />);
  const searchInput = screen.getByTestId('test-input');
  const errTestBtn = screen.getByTestId('test-err-btn');

  expect(searchInput).toBeInTheDocument();
  expect(errTestBtn).toBeInTheDocument();
});

test('Show search results after typing in search input', async () => {
  render(<App />);
  const searchInput = screen.getByTestId('test-input');

  expect(searchInput.value).toBe('');
  // typing in search input.
  fireEvent.change(searchInput, { target: { value: 'axios' } });
  // waiting for debounce time after input change.
  await waitFor(
    () => {
      const cards = screen.getAllByTestId('package-card');
      expect(cards[0]).toBeInTheDocument();
    },
    { timeout: 1400 }
  );
});

