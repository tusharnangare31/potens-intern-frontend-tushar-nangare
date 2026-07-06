import React from 'react';
import { cn } from '../utils/cn';

export default function PrimaryButton({ children, onClick, disabled, className, type = 'button', icon: Icon }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "w-full flex items-center justify-center gap-2 py-[14px] px-6 rounded-lg font-sans text-[15px] font-semibold transition-all duration-200",
        disabled 
          ? "bg-surface-variant text-on-surface-variant/50 cursor-not-allowed" 
          : "bg-primary text-white hover:bg-primary-dark active:scale-[0.98]",
        className
      )}
    >
      {children}
      {Icon && <Icon size={20} />}
    </button>
  );
}
