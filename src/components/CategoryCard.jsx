import React, { useState } from 'react';
import { cn } from '../utils/cn';
import { useLanguage } from '../context/LanguageContext';

export default function CategoryCard({ icon: Icon, titleKey, descKey, isSelected, onClick }) {
  const { t } = useLanguage();
  const [rippleData, setRippleData] = useState(null);

  const handleClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    setRippleData({
      key: Date.now(),
      size,
      left: e.clientX - rect.left - size / 2,
      top: e.clientY - rect.top - size / 2,
    });
    
    // Call the parent onClick handler
    if (onClick) onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className={cn(
        "relative flex flex-col items-center p-5 rounded-xl border transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 overflow-hidden select-none",
        isSelected 
          ? "border-primary bg-primary-light/50 text-on-primary-container shadow-sm transform -translate-y-px"
          : "border-surface-variant bg-surface hover:border-primary/60 hover:shadow-sm"
      )}
    >
      <div className={cn(
        "mb-3 transition-colors w-7 h-7",
        isSelected ? "text-primary" : "text-primary/70"
      )}>
        <Icon />
      </div>
      <h3 className="font-semibold text-[15px] mb-1">{t(titleKey)}</h3>
      <p className="text-[13px] text-on-surface-variant line-clamp-2 leading-relaxed">{t(descKey)}</p>

      <div className="ripple-container">
        {rippleData && (
          <span
            key={rippleData.key}
            className="ripple"
            style={{
              width: rippleData.size,
              height: rippleData.size,
              left: rippleData.left,
              top: rippleData.top,
            }}
          />
        )}
      </div>
    </button>
  );
}
