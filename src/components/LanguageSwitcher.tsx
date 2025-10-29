import React, { useState, useRef, useEffect } from 'react';
import type { Language } from '../types';

interface LanguageSwitcherProps {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
}

const languages: { code: Language; name: string; flag: string }[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'ar', name: 'العربية', flag: '🇪🇬' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
];

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLanguage, setLanguage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedLanguage = languages.find(lang => lang.code === currentLanguage);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-12 h-10 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
      >
        {selectedLanguage?.flag}
      </button>
      {isOpen && (
        <div className="absolute top-full mt-2 right-0 LTR:right-0 RTL:left-0 bg-black rounded-md shadow-lg border border-gray-800 w-36">
          <ul>
            {languages.map(({ code, name, flag }) => (
              <li key={code}>
                <button
                  onClick={() => {
                    setLanguage(code);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 flex items-center gap-2 text-gray-200 ${
                    currentLanguage === code ? 'bg-green-500/10 text-green-400' : 'hover:bg-gray-800'
                  }`}
                >
                  <span>{flag}</span>
                  <span>{name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
