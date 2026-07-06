import React, { useState } from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import ProgressIndicator from '../components/ProgressIndicator';
import SuccessAnimation from '../components/SuccessAnimation';
import PrimaryButton from '../components/PrimaryButton';
import ReportModal from '../components/ReportModal';
import StatusTimeline from '../components/StatusTimeline';
import { FileText, PlusCircle, List } from 'lucide-react';

export default function Confirmation() {
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const report = location.state?.report;

  if (!report) {
    return <Navigate to="/" replace />;
  }

  const capitalizedCategory = report.category.charAt(0).toUpperCase() + report.category.slice(1);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 w-full max-w-md mx-auto p-5 pb-24 flex flex-col">
        <ProgressIndicator currentStep={3} />
        
        <div className="flex-1 flex flex-col items-center pt-8">
          <SuccessAnimation />
          
          <h2 className="text-2xl font-bold text-on-surface text-center mb-8">
            {t('successMessage')}
          </h2>

          <div className="w-full mb-8 bg-surface rounded-xl p-4 border border-surface-variant">
            <StatusTimeline createdAt={report.createdAt} />
          </div>

          <div className="w-full md3-card p-6 space-y-4 mb-10 bg-primary-light/40 border-primary-light">
            <div className="flex justify-between items-center pb-4 border-b border-surface-variant">
              <span className="text-[13px] text-on-surface-variant font-semibold flex items-center gap-2">
                <FileText size={16} />
                {t('refIdLabel')}
              </span>
              <span className="font-bold text-primary tracking-wide text-[15px]">{report.id}</span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-[13px] text-on-surface-variant font-medium">{t('dateLabel')}</span>
              <span className="text-[13px] font-semibold text-on-surface">
                {new Date(report.createdAt).toLocaleDateString()}
              </span>
            </div>
            
            <div className="flex justify-between items-center">
              <span className="text-[13px] text-on-surface-variant font-medium">{t('categoryLabel')}</span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-[11px] font-bold bg-surface-variant text-on-surface-variant">
                {t(`cat${capitalizedCategory}`)}
              </span>
            </div>
          </div>

          <div className="w-full space-y-3 mt-auto">
            <PrimaryButton onClick={() => navigate('/', { replace: true })} icon={PlusCircle}>
              {t('reportAnotherButton')}
            </PrimaryButton>
            
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full flex items-center justify-center gap-2 py-[14px] px-6 rounded-lg font-sans text-[15px] font-semibold text-primary bg-surface border-[1.5px] border-surface-variant hover:bg-background hover:border-primary/50 transition-colors"
            >
              <List size={20} />
              {t('viewStoredButton')}
            </button>
          </div>
        </div>
      </main>

      <ReportModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
