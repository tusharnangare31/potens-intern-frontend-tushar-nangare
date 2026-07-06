import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../utils/cn';
import { Check } from 'lucide-react';

export default function ProgressIndicator({ currentStep }) {
  const { t } = useLanguage();
  
  const steps = [
    { id: 1, label: t('stepCategory') },
    { id: 2, label: t('stepDetails') },
    { id: 3, label: t('stepConfirm') },
  ];

  return (
    <div className="w-full relative py-2 mb-8">
      {/* Horizontal line */}
      <div className="absolute top-[21px] left-[16%] right-[16%] h-[2px] bg-surface-variant z-0" />
      
      {/* Active line */}
      <div 
        className="absolute top-[21px] left-[16%] h-[2px] bg-primary z-0 transition-all duration-500" 
        style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 68}%` }} 
      />
      
      <div className="flex justify-between relative z-10">
        {steps.map((step) => {
          const isActive = step.id === currentStep;
          const isPast = step.id < currentStep;
          
          return (
            <div key={step.id} className="flex flex-col items-center w-1/3 text-center">
              <div className={cn(
                "w-7 h-7 mb-1.5 rounded-full border-[2px] flex items-center justify-center bg-surface transition-all duration-500 text-[12px] font-bold",
                (isActive || isPast) ? "border-primary text-primary" : "border-surface-variant text-on-surface-variant",
                isPast && "bg-primary text-white",
                isActive && "ring-4 ring-primary-light"
              )}>
                {isPast ? <Check size={14} strokeWidth={3} /> : step.id}
              </div>
              <span className={cn(
                "text-[11px] font-semibold transition-colors duration-300",
                isActive ? "text-primary" : "text-on-surface-variant"
              )}>
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
