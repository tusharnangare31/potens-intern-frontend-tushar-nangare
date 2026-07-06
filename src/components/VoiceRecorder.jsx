import React from 'react';
import { Mic, Square, AlertCircle } from 'lucide-react';
import { cn } from '../utils/cn';
import { useLanguage } from '../context/LanguageContext';

export default function VoiceRecorder({ isListening, isSupported, onToggle }) {
  const { t } = useLanguage();

  if (!isSupported) {
    return (
      <div className="flex items-center gap-2 text-error text-xs mt-2" title={t('voiceNotSupported')}>
        <AlertCircle size={14} />
        <span>{t('voiceNotSupported')}</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 mt-2">
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
          isListening 
            ? "bg-error text-white animate-pulse shadow-[0_0_0_4px_rgba(179,38,30,0.2)]" 
            : "bg-surface-variant text-on-surface hover:bg-primary-light hover:text-primary"
        )}
        aria-label={isListening ? 'Stop recording' : 'Start recording'}
      >
        {isListening ? <Square size={18} /> : <Mic size={18} />}
      </button>
      <span className={cn(
        "text-xs font-medium transition-colors",
        isListening ? "text-error" : "text-on-surface-variant"
      )}>
        {isListening ? t('listening') : t('voiceHint')}
      </span>
    </div>
  );
}
