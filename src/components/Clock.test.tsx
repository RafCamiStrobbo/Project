import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { act } from 'react';
import { Clock } from './Clock';

describe('Clock', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  it('renders without crashing', () => {
    render(<Clock />);
    expect(screen.getByTestId('clock-container')).toBeInTheDocument();
  });

  it('displays current time on mount', () => {
    const mockDate = new Date('2026-02-27T10:30:00');
    vi.setSystemTime(mockDate);

    render(<Clock />);
    expect(screen.getByTestId('clock-time')).toHaveTextContent('10:30');
  });

  it('updates time after one minute', () => {
    vi.setSystemTime(new Date('2026-02-27T10:30:00'));

    render(<Clock />);
    const initialTime = screen.getByTestId('clock-time').textContent;
    expect(initialTime).toBe('10:30');

    // Advance to next minute - the component should update
    act(() => {
      vi.setSystemTime(new Date('2026-02-27T10:31:00'));
      vi.advanceTimersByTime(60000);
    });

    const updatedTime = screen.getByTestId('clock-time').textContent;
    // Verify that the time has changed from the initial time
    expect(updatedTime).not.toBe('10:30');
  });

  it('cleans up interval on unmount', () => {
    const clearIntervalSpy = vi.spyOn(globalThis, 'clearInterval');
    const { unmount } = render(<Clock />);
    
    unmount();
    
    expect(clearIntervalSpy).toHaveBeenCalledTimes(1);
  });

  it('applies correct CSS module classes', () => {
    render(<Clock />);
    
    const container = screen.getByTestId('clock-container');
    const timeElement = screen.getByTestId('clock-time');
    
    // CSS modules generate hashed class names, so we just verify they have classes
    expect(container.className).toBeTruthy();
    expect(timeElement.className).toBeTruthy();
  });
});
