import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getReports } from '../utils/storage';
import StatusTimeline from './StatusTimeline';

export default function ReportModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  const reports = getReports();

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col justify-end sm:justify-center items-center bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full sm:w-[480px] sm:rounded-2xl rounded-t-3xl bg-surface flex flex-col max-h-[85vh] shadow-xl transform transition-all animate-in slide-in-from-bottom-8 sm:slide-in-from-bottom-0 sm:zoom-in-95 duration-300"
      >
        <div className="flex items-center justify-between p-5 border-b border-surface-variant sticky top-0 bg-surface rounded-t-3xl sm:rounded-t-2xl z-10">
          <h2 className="text-[17px] font-bold text-on-surface">{t('modalTitle')}</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-surface-variant transition-colors text-on-surface-variant"
            aria-label={t('closeModal')}
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="p-5 overflow-y-auto flex-1">
          {reports.length === 0 ? (
            <div className="py-12 text-center text-on-surface-variant">
              <p>{t('noReports')}</p>
            </div>
          ) : (
            <div className="space-y-5 pb-8">
              {reports.map((report) => (
                <div key={report.id} className="md3-card p-5">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold text-primary bg-primary-container px-2.5 py-1 rounded-md">
                      {report.id}
                    </span>
                    <span className="text-[13px] font-medium text-on-surface-variant">
                      {new Date(report.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <div className="pb-4 mb-4 border-b border-surface-variant/60">
                    <StatusTimeline createdAt={report.createdAt} />
                  </div>

                  <p className="text-[15px] font-bold mb-1.5 text-on-surface">
                    {t(`cat${report.category.charAt(0).toUpperCase() + report.category.slice(1)}`)}
                  </p>
                  <p className="text-[14px] text-on-surface-variant line-clamp-2 leading-relaxed">
                    {report.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
