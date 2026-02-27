import { describe, it, expect } from 'vitest';
import { formatTime } from './formatTime';

describe('formatTime', () => {
  it('formats morning hours correctly', () => {
    const date = new Date('2026-02-27T09:05:00');
    expect(formatTime(date)).toBe('9:05');
  });

  it('formats afternoon hours correctly', () => {
    const date = new Date('2026-02-27T14:30:00');
    expect(formatTime(date)).toBe('14:30');
  });

  it('formats midnight correctly', () => {
    const date = new Date('2026-02-27T00:00:00');
    expect(formatTime(date)).toBe('0:00');
  });

  it('formats end of day correctly', () => {
    const date = new Date('2026-02-27T23:59:00');
    expect(formatTime(date)).toBe('23:59');
  });

  it('pads single-digit minutes with zero', () => {
    const date = new Date('2026-02-27T15:05:00');
    expect(formatTime(date)).toBe('15:05');
  });

  it('handles noon correctly', () => {
    const date = new Date('2026-02-27T12:00:00');
    expect(formatTime(date)).toBe('12:00');
  });
});
