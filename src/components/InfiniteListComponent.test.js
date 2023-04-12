import { render, screen } from '@testing-library/react';
import InfiniteListComponent from './InfiniteListComponent';

test('renders learn react link', () => {
  render(<InfiniteListComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
