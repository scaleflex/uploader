import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { formatRelativeDate } from './provider-browser';

// Minimal stand-in for the host TFunction. We resolve the count-driven
// defaults so tests can assert on the rendered string without spinning up
// i18next.
const fakeT = ((
  key: string,
  defaultValueOrOptions?: string | Record<string, unknown>,
): string => {
  if (typeof defaultValueOrOptions === 'string') return defaultValueOrOptions;
  const opts = defaultValueOrOptions as Record<string, unknown> | undefined;
  if (!opts) return key;
  const count = (opts.count as number) ?? 0;
  const tpl =
    count === 1
      ? ((opts.defaultValue_one as string) ?? key)
      : ((opts.defaultValue_other as string) ?? key);
  return tpl.replace('{{count}}', String(count));
}) as unknown as Parameters<typeof formatRelativeDate>[1];

describe('formatRelativeDate', () => {
  const NOW = new Date('2026-06-06T12:00:00Z').getTime();

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(NOW);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  function iso(msAgo: number): string {
    return new Date(NOW - msAgo).toISOString();
  }

  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const MONTH = 30 * DAY;
  const YEAR = 365 * DAY;

  it('returns empty string for missing or invalid input', () => {
    expect(formatRelativeDate(undefined, fakeT)).toBe('');
    expect(formatRelativeDate('', fakeT)).toBe('');
    expect(formatRelativeDate('not-a-date', fakeT)).toBe('');
  });

  it('shows "just now" for sub-minute deltas', () => {
    expect(formatRelativeDate(iso(0), fakeT)).toBe('just now');
    expect(formatRelativeDate(iso(15 * SECOND), fakeT)).toBe('just now');
  });

  it('shows minutes for sub-hour deltas', () => {
    expect(formatRelativeDate(iso(MINUTE), fakeT)).toBe('1 minute ago');
    expect(formatRelativeDate(iso(5 * MINUTE), fakeT)).toBe('5 minutes ago');
    expect(formatRelativeDate(iso(45 * MINUTE), fakeT)).toBe('45 minutes ago');
  });

  it('escalates to "1 hour ago" instead of "60 minutes ago" near the boundary', () => {
    // 59 minutes 30 seconds — round-up to 60 would be a unit bug.
    expect(
      formatRelativeDate(iso(59 * MINUTE + 30 * SECOND), fakeT),
    ).toBe('1 hour ago');
    expect(formatRelativeDate(iso(HOUR), fakeT)).toBe('1 hour ago');
  });

  it('shows hours for sub-day deltas', () => {
    expect(formatRelativeDate(iso(2 * HOUR), fakeT)).toBe('2 hours ago');
    expect(formatRelativeDate(iso(23 * HOUR), fakeT)).toBe('23 hours ago');
  });

  it('escalates to "yesterday" instead of "24 hours ago" near the day boundary', () => {
    expect(formatRelativeDate(iso(23 * HOUR + 45 * MINUTE), fakeT)).toBe(
      'yesterday',
    );
    expect(formatRelativeDate(iso(DAY), fakeT)).toBe('yesterday');
  });

  it('shows days for sub-month deltas', () => {
    expect(formatRelativeDate(iso(2 * DAY), fakeT)).toBe('2 days ago');
    expect(formatRelativeDate(iso(15 * DAY), fakeT)).toBe('15 days ago');
  });

  it('escalates to "1 month ago" instead of "30 days ago" near the month boundary', () => {
    expect(formatRelativeDate(iso(29 * DAY + 18 * HOUR), fakeT)).toBe(
      '1 month ago',
    );
    expect(formatRelativeDate(iso(MONTH), fakeT)).toBe('1 month ago');
  });

  it('shows months for sub-year deltas', () => {
    expect(formatRelativeDate(iso(3 * MONTH), fakeT)).toBe('3 months ago');
    expect(formatRelativeDate(iso(11 * MONTH), fakeT)).toBe('11 months ago');
  });

  it('escalates to "1 year ago" instead of "12 months ago" near the year boundary', () => {
    // ~11.7 months — rounds to 12 months, but year is the right unit.
    expect(formatRelativeDate(iso(YEAR - 10 * DAY), fakeT)).toBe('1 year ago');
    expect(formatRelativeDate(iso(YEAR), fakeT)).toBe('1 year ago');
  });

  it('shows years for older deltas', () => {
    expect(formatRelativeDate(iso(3 * YEAR), fakeT)).toBe('3 years ago');
    expect(formatRelativeDate(iso(5 * YEAR), fakeT)).toBe('5 years ago');
  });

  it('clamps future timestamps to "just now" rather than negative durations', () => {
    expect(formatRelativeDate(iso(-5 * MINUTE), fakeT)).toBe('just now');
  });
});
