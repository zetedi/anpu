import React from 'react';
import type { Content } from '../types';
import { InvestIcon, FundIcon, GrowthIcon } from './icons/FeatureIcons';

interface HowItWorksProps {
  content: Content['howItWorks'];
}

const ICONS = [InvestIcon, FundIcon, GrowthIcon];

const HowItWorks: React.FC<HowItWorksProps> = ({ content }) => {
  return (
    <section id="how-it-works" className="py-24 bg-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-16">{content.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {content.steps.map((step, index) => {
            const IconComponent = ICONS[index];
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-6">
                   <IconComponent className="w-16 h-16 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 max-w-xs">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
