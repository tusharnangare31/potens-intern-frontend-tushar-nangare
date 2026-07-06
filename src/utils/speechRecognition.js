/**
 * Web Speech API helper to determine browser support.
 */

export function isSpeechRecognitionSupported() {
  return 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
}

export function getSpeechRecognitionClass() {
  return window.SpeechRecognition || window.webkitSpeechRecognition || null;
}
