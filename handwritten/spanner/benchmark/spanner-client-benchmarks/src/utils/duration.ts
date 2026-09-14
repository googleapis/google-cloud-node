/**
 * Parses a human-readable duration string (e.g., "30s", "5m", "2h", "inf", "infinite")
 * into milliseconds. Returns null for infinite durations.
 */
export function parseDuration(durationStr: string | undefined): number | null {
  if (
    !durationStr ||
    durationStr.toLowerCase() === 'inf' ||
    durationStr.toLowerCase() === 'infinite'
  ) {
    return null;
  }

  const regex = /^(\d+)(ms|s|m|h)$/i;
  const match = durationStr.match(regex);

  if (!match) {
    // If it's just digits, default to seconds (matching Java's behavior)
    if (/^\d+$/.test(durationStr)) {
      return parseInt(durationStr, 10) * 1000;
    }
    return null;
  }

  const value = parseInt(match[1], 10);
  const unit = match[2].toLowerCase();

  switch (unit) {
    case 'ms':
      return value;
    case 's':
      return value * 1000;
    case 'm':
      return value * 60 * 1000;
    case 'h':
      return value * 60 * 60 * 1000;
    default:
      return null;
  }
}
