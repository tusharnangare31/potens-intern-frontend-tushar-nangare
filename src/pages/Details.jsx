import React, { useState } from 'react';
import { useLocation, useNavigate, Navigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useSpeechRecognition } from '../hooks/useSpeechRecognition';
import { validateReport } from '../utils/validators';
import { generateReferenceId } from '../utils/generateReferenceId';
import { saveReport } from '../utils/storage';
import Header from '../components/Header';
import ProgressIndicator from '../components/ProgressIndicator';
import PrimaryButton from '../components/PrimaryButton';
import ImageUploader from '../components/ImageUploader';
import VoiceRecorder from '../components/VoiceRecorder';
import { ArrowLeft, Send } from 'lucide-react';

const MAX_CHARS = 500;

export default function Details() {
  const { t, lang } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Redirect back if accessed directly without category
  const category = location.state?.category;

  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const { isListening, isSupported, toggleListening } = useSpeechRecognition({
    lang,
    onResult: (text) => {
      setDescription((prev) => {
        const newText = prev + (prev ? ' ' : '') + text;
        return newText.slice(0, MAX_CHARS);
      });
      if (errors.description) {
        setErrors((prev) => ({ ...prev, description: null }));
      }
    }
  });

  if (!category) {
    return <Navigate to="/" replace />;
  }

  const capitalizedCategory = category.charAt(0).toUpperCase() + category.slice(1);

  const handleSubmit = () => {
    const { isValid, errors: validationErrors } = validateReport(category, description);
    
    if (!isValid) {
      setErrors(validationErrors);
      return;
    }

    const report = {
      id: generateReferenceId(),
      category,
      description: description.trim(),
      photo: image, // in a real app, this would be uploaded to a server and we'd store the URL
      createdAt: new Date().toISOString(),
      language: lang
    };

    saveReport(report);
    navigate('/confirmation', { state: { report } });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1 w-full max-w-md mx-auto p-5 pb-24 flex flex-col">
        <ProgressIndicator currentStep={2} />
        
        <div className="flex items-center gap-3 mb-6">
          <button 
            onClick={() => navigate(-1)}
            className="p-2 rounded-full hover:bg-surface-variant transition-colors text-on-surface-variant"
            aria-label={t('backButton')}
          >
            <ArrowLeft size={24} />
          </button>
          <div>
            <h2 className="text-2xl font-bold text-on-surface mb-1">{t('titleDetails')}</h2>
            <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-container text-on-primary-container">
              {t(`cat${capitalizedCategory}`)}
            </div>
          </div>
        </div>

        <div className="space-y-6 flex-1">
          {/* Textarea Section */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-on-surface mb-2">
              {t('descriptionLabel')}
            </label>
            <div className="relative">
              <textarea
                id="description"
                rows="5"
                className={`md3-input resize-none ${errors.description ? 'border-error focus:ring-error' : ''}`}
                placeholder={t('descriptionPlaceholder')}
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value.slice(0, MAX_CHARS));
                  if (errors.description) setErrors(prev => ({ ...prev, description: null }));
                }}
              />
              <div className="flex justify-between items-start mt-1">
                <VoiceRecorder 
                  isListening={isListening} 
                  isSupported={isSupported} 
                  onToggle={toggleListening} 
                />
                <span className={`text-xs ${description.length >= MAX_CHARS ? 'text-error font-medium' : 'text-on-surface-variant'}`}>
                  {MAX_CHARS - description.length} {t('charactersLeft')}
                </span>
              </div>
            </div>
            {errors.description && (
              <p className="text-error text-xs mt-1 font-medium">{t(errors.description)}</p>
            )}
          </div>

          {/* Image Upload Section */}
          <ImageUploader 
            image={image} 
            onImageChange={setImage} 
            onImageRemove={() => setImage(null)} 
          />
        </div>

        <div className="mt-8">
          <PrimaryButton onClick={handleSubmit} icon={Send}>
            {t('submitButton')}
          </PrimaryButton>
        </div>
      </main>
    </div>
  );
}
