import React, { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function SuccessAnimation() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Slight delay for animation effect on mount
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center mb-6">
      <div className={`transition-all duration-700 transform ${show ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
        <div className="relative">
          <div className="absolute inset-0 bg-success-container rounded-full animate-ping opacity-25"></div>
          <CheckCircle2 size={80} className="text-success relative z-10 bg-white rounded-full" strokeWidth={1.5} />
        </div>
      </div>
    </div>
  );
}
