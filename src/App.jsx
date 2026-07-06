import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

// Lazy loading pages for performance optimization
const Category = lazy(() => import('./pages/Category'));
const Details = lazy(() => import('./pages/Details'));
const Confirmation = lazy(() => import('./pages/Confirmation'));

// Simple loading fallback
const LoadingFallback = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-surface-variant border-t-primary rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Category />} />
            <Route path="/details" element={<Details />} />
            <Route path="/confirmation" element={<Confirmation />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </LanguageProvider>
  );
}
