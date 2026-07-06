/**
 * LocalStorage wrapper for the application.
 */

const REPORTS_KEY = 'civic_reports';
const LANG_KEY = 'civic_lang';

export const saveReport = (report) => {
  try {
    const reports = getReports();
    // Strip large photo payload before saving to localStorage to prevent QuotaExceededError
    const safeReport = { ...report, photo: report.photo ? 'photo_attached.jpg' : null };
    reports.unshift(safeReport); // Add new report to the beginning
    localStorage.setItem(REPORTS_KEY, JSON.stringify(reports));
  } catch (error) {
    console.error('Failed to save report to localStorage:', error);
  }
};

export function getReports() {
  try {
    const data = localStorage.getItem(REPORTS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Failed to parse reports from localStorage', error);
    return [];
  }
}

export function saveLanguage(lang) {
  localStorage.setItem(LANG_KEY, lang);
}

export function getLanguage() {
  return localStorage.getItem(LANG_KEY) || 'en';
}
