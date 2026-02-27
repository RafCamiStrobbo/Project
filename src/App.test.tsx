import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders Clock component', () => {
    render(<App />);
    expect(screen.getByTestId('clock-container')).toBeInTheDocument();
  });

  it('displays clock time', () => {
    render(<App />);
    const timeElement = screen.getByTestId('clock-time');
    expect(timeElement).toBeInTheDocument();
    expect(timeElement.textContent).toMatch(/^\d{1,2}:\d{2}$/);
  });
});
