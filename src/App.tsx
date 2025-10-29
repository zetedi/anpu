import React, { useState, useEffect } from 'react';
import { translations } from './lib/i18n';
import type { Language } from './types';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import Team from './components/Team';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [language, setLanguage] = useState<Language>('en');
  const content = translations[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);

  return (
    <div className="bg-black text-gray-200 min-h-screen font-sans">
      <Header currentLanguage={language} setLanguage={setLanguage} content={content.header} />
      <main>
        <Hero content={content.hero} />
        <HowItWorks content={content.howItWorks} />
        <Features content={content.features} />
        <Team content={content.team} />
      </main>
      <Footer content={content.footer} navContent={content.header} />
    </div>
  );
};

export default App;
