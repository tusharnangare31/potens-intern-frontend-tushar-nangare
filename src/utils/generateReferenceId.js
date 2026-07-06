/**
 * Generates a unique reference ID for a civic issue report.
 * Format: CIV-XXXXXXXX
 */
export function generateReferenceId() {
  const randomPart = Math.floor(10000000 + Math.random() * 90000000);
  return `CIV-${randomPart}`;
}
