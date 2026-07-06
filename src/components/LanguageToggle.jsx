import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../utils/cn';

export default function LanguageToggle({ className }) {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      className={cn(
        "inline-flex items-center justify-center min-w-[42px] h-[34px] px-3 border-[1.5px] border-surface-variant rounded-full bg-surface text-on-surface-variant text-[13px] font-semibold cursor-pointer transition-all duration-200 select-none hover:border-primary hover:text-primary active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        className
      )}
      onClick={toggleLanguage}
      aria-label="Toggle Language"
      data-lang={lang}
    >
      {lang === 'en' ? 'हि' : 'EN'}
    </button>
  );
}
