import React from 'react';
import type { Content } from '../types';

interface FooterProps {
  content: Content['footer'];
  navContent: Content['header'];
}

const AnpuIcon: React.FC<{className: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a10 10 0 00-9.366 13.523C3.96 17.56 5.865 19 8.25 19H15.75c2.385 0 4.29-1.44 5.616-3.477A10 10 0 0012 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19v3m-3-3l-2 2m5 0l2 2" />
    </svg>
);

const Footer: React.FC<FooterProps> = ({ content, navContent }) => {
  const projectLinks = [
    { href: '#how-it-works', text: navContent.navHow },
    { href: '#features', text: navContent.navFeatures },
    { href: '#team', text: navContent.navTeam },
  ];
  
  const communityLinks = [
    { href: '#', text: 'Twitter' },
    { href: '#', text: 'Telegram' },
    { href: '#', text: 'Medium' },
  ];

  const legalLinks = [
    { href: '#', text: 'Privacy Policy' },
    { href: '#', text: 'Terms of Service' },
  ];

  return (
    <footer className="bg-black border-t border-gray-800 text-gray-400">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 mb-8 md:mb-0">
            <a href="#home" className="flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors">
              <AnpuIcon className="w-8 h-8"/>
              <span className="font-bold text-xl tracking-tight text-white">AnpuCoin</span>
            </a>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">{content.links.project}</h3>
            <ul className="space-y-2">
              {projectLinks.map(link => <li key={link.text}><a href={link.href} className="hover:text-white transition-colors">{link.text}</a></li>)}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4">{content.links.community}</h3>
            <ul className="space-y-2">
              {communityLinks.map(link => <li key={link.text}><a href={link.href} className="hover:text-white transition-colors">{link.text}</a></li>)}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">{content.links.legal}</h3>
            <ul className="space-y-2">
              {legalLinks.map(link => <li key={link.text}><a href={link.href} className="hover:text-white transition-colors">{link.text}</a></li>)}
            </ul>
          </div>

        </div>
      </div>
      <div className="bg-black border-t border-gray-900">
        <div className="container mx-auto px-6 py-4 text-center text-sm">
            <p>{content.text}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
