/**
 * Formats a Date object into h:mm format (24-hour time)
 * @param date - The date object to format
 * @returns Formatted time string (e.g., "9:45", "14:30", "0:05")
 */
export function formatTime(date: Date): string {
  const hours = date.getHours();
  const rawMinutes = date.getMinutes();
  const minutes = rawMinutes < 10 ? `0${rawMinutes}` : rawMinutes;
  
  return `${hours}:${minutes}`;
}
