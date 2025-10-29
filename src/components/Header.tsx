import React, { useState } from 'react';
import type { Language, Content } from '../types';
import LanguageSwitcher from './LanguageSwitcher';

interface HeaderProps {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
  content: Content['header'];
}

const AnpuIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 00-9.366 13.523C3.96 17.56 5.865 19 8.25 19H15.75c2.385 0 4.29-1.44 5.616-3.477A10 10 0 0012 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19v3m-3-3l-2 2m5 0l2 2" />
    </svg>
);


const Header: React.FC<HeaderProps> = ({ currentLanguage, setLanguage, content }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { href: '#home', text: content.navHome },
    { href: '#how-it-works', text: content.navHow },
    { href: '#features', text: content.navFeatures },
    { href: '#team', text: content.navTeam },
  ];

  return (
    <header className="bg-black/80 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
          <AnpuIcon className="w-8 h-8"/>
          <span className="font-bold text-xl tracking-tight text-white">AnpuCoin</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-gray-300 hover:text-white transition-colors font-medium">
              {link.text}
            </a>
          ))}
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher currentLanguage={currentLanguage} setLanguage={setLanguage} />
            <a href="#" className="bg-green-500 text-black font-bold py-2 px-5 rounded-full hover:bg-green-400 transition-colors">
                {content.cta}
            </a>
        </div>


        <div className="md:hidden flex items-center">
            <LanguageSwitcher currentLanguage={currentLanguage} setLanguage={setLanguage} />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 focus:outline-none ml-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path></svg>
            </button>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-black/90 pb-4">
            <nav className="flex flex-col items-center space-y-4">
                 {navLinks.map((link) => (
                    <a key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="text-gray-300 hover:text-white transition-colors font-medium py-2">
                        {link.text}
                    </a>
                 ))}
                 <a href="#" className="bg-green-500 text-black font-bold py-2 px-5 rounded-full hover:bg-green-400 transition-colors mt-4">
                    {content.cta}
                 </a>
            </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
