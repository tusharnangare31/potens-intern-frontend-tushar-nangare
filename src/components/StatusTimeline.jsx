import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../utils/cn';

export default function StatusTimeline({ createdAt }) {
  const { t } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  
  // Simulate status progression
  useEffect(() => {
    const calculateStep = () => {
      const ageInSeconds = (new Date() - new Date(createdAt)) / 1000;
      if (ageInSeconds > 60) return 4;
      if (ageInSeconds > 30) return 3;
      if (ageInSeconds > 10) return 2;
      return 1;
    };
    
    setCurrentStep(calculateStep());
    const interval = setInterval(() => setCurrentStep(calculateStep()), 5000);
    return () => clearInterval(interval);
  }, [createdAt]);

  const steps = [
    { id: 1, label: t('statusSubmitted') },
    { id: 2, label: t('statusReview') },
    { id: 3, label: t('statusProgress') },
    { id: 4, label: t('statusResolved') },
  ];

  return (
    <div className="w-full relative mt-2 pb-2">
      {/* Horizontal background line */}
      <div className="absolute top-[11px] left-[12%] right-[12%] h-[2px] bg-surface-variant z-0" />
      
      {/* Horizontal active progress line */}
      <div 
        className="absolute top-[11px] left-[12%] h-[2px] bg-primary z-0 transition-all duration-500" 
        style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 76}%` }}
      />
      
      <div className="flex justify-between relative z-10">
        {steps.map((step) => {
          const isCompleted = step.id <= currentStep;
          const isCurrent = step.id === currentStep;
          
          return (
            <div key={step.id} className="flex flex-col items-center text-center w-1/4">
              <div className={cn(
                "w-6 h-6 mb-2 rounded-full border-[2px] flex items-center justify-center bg-surface transition-all duration-500",
                isCompleted ? "border-primary" : "border-surface-variant",
                isCurrent && "ring-4 ring-primary-light shadow-sm"
              )}>
                <div className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  isCompleted ? "bg-primary scale-100" : "bg-transparent scale-0"
                )} />
              </div>
              <h4 className={cn(
                "text-[10px] font-semibold leading-tight px-0.5 transition-colors duration-300",
                isCompleted ? "text-on-surface" : "text-on-surface-variant/60"
              )}>
                {step.label}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
