import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import ProgressIndicator from '../components/ProgressIndicator';
import CategoryCard from '../components/CategoryCard';

// Custom inline SVGs from the first design
const RoadsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M4 19L8 5"/><path d="M16 5L20 19"/><path d="M12 6V8"/><path d="M12 11V13"/><path d="M12 16V18"/>
  </svg>
);
const WaterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M12 2C12 2 5 10 5 14.5C5 18.09 8.13 21 12 21C15.87 21 19 18.09 19 14.5C19 10 12 2 12 2Z"/>
  </svg>
);
const ElectricityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z"/>
  </svg>
);
const SanitationIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M3 6H21"/><path d="M5 6V20C5 21 6 22 7 22H17C18 22 19 21 19 20V6"/><path d="M8 6V4C8 3 9 2 10 2H14C15 2 16 3 16 4V6"/><path d="M10 11V17"/><path d="M14 11V17"/>
  </svg>
);
const SafetyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"/>
  </svg>
);
const OtherIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
    <circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>
  </svg>
);

const CATEGORIES = [
  { id: 'road', icon: RoadsIcon },
  { id: 'water', icon: WaterIcon },
  { id: 'electricity', icon: ElectricityIcon },
  { id: 'garbage', icon: SanitationIcon },
  { id: 'drainage', icon: SafetyIcon },
  { id: 'other', icon: OtherIcon },
];

export default function Category() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);

  const handleNext = () => {
    if (selected) {
      navigate('/details', { state: { category: selected } });
    }
  };

  const handleSelect = (e, id) => {
    setSelected(id);
    // Delay navigation slightly to let the ripple play, just like the first design
    setTimeout(() => {
      navigate('/details', { state: { category: id } });
    }, 350);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 w-full max-w-md mx-auto p-5 pb-24 flex flex-col">
        <ProgressIndicator currentStep={1} />
        
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-on-surface mb-1">{t('titleCategory')}</h2>
          <p className="text-sm text-on-surface-variant">{t('subtitleCategory')}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-8 flex-1">
          {CATEGORIES.map((cat) => {
            const capitalized = cat.id.charAt(0).toUpperCase() + cat.id.slice(1);
            return (
              <CategoryCard
                key={cat.id}
                icon={cat.icon}
                titleKey={`cat${capitalized}`}
                descKey={`cat${capitalized}Desc`}
                isSelected={selected === cat.id}
                onClick={(e) => handleSelect(e, cat.id)}
              />
            );
          })}
        </div>

      </main>
    </div>
  );
}
