import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageToggle from './LanguageToggle';
import ReportModal from './ReportModal';
import { List } from 'lucide-react';

export default function Header() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-surface/90 backdrop-blur-md border-b border-surface-variant px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.jpg" alt="Naagarik Logo" className="w-8 h-8 rounded-lg object-cover shadow-sm border border-surface-variant" />
          <h1 className="font-bold text-lg text-primary truncate mr-2">
            {t('appName')}
          </h1>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="p-2 rounded-full hover:bg-surface-variant transition-colors text-primary"
            aria-label={t('viewStoredButton')}
          >
            <List size={20} />
          </button>
          <LanguageToggle />
        </div>
      </header>
      
      <ReportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
