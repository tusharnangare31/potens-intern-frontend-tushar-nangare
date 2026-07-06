import React, { useRef } from 'react';
import { ImagePlus, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function ImageUploader({ image, onImageChange, onImageRemove }) {
  const { t } = useLanguage();
  const inputRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onImageChange(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-on-surface mb-2">
        {t('imageLabel')}
      </label>
      
      {!image ? (
        <div 
          onClick={() => inputRef.current?.click()}
          className="w-full border-2 border-dashed border-surface-variant rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:border-primary hover:bg-primary-light/30 transition-colors"
        >
          <ImagePlus size={32} className="text-on-surface-variant mb-3" />
          <p className="text-sm font-medium text-on-surface-variant text-center">{t('uploadHint')}</p>
          <input 
            ref={inputRef}
            type="file" 
            accept="image/*" 
            className="hidden" 
            onChange={handleFileChange}
          />
        </div>
      ) : (
        <div className="relative w-full rounded-lg overflow-hidden border border-surface-variant">
          <img src={image} alt="Preview" className="w-full max-h-48 object-cover" />
          <button
            type="button"
            onClick={onImageRemove}
            className="absolute top-2 right-2 p-1.5 bg-black/60 text-white rounded-full hover:bg-black/80 transition-colors"
            aria-label={t('removeImage')}
          >
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
}
