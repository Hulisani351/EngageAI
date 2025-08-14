import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EngageAI brand', () => {
  render(<App />);
  const brandElement = screen.getByText(/EngageAI/i);
  expect(brandElement).toBeInTheDocument();
});
