import React from 'react';
import type { Content } from '../types';
import { FinanceIcon, EgyptIcon, SecureIcon } from './icons/FeatureIcons';

interface FeaturesProps {
    content: Content['features'];
}

const ICONS = [FinanceIcon, EgyptIcon, SecureIcon];

const Features: React.FC<FeaturesProps> = ({ content }) => {
    return (
        <section id="features" className="py-24 bg-[#111111]">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl md:text-5xl font-black text-white text-center mb-16">{content.title}</h2>
                <div className="max-w-4xl mx-auto">
                    {content.items.map((item, index) => {
                        const IconComponent = ICONS[index];
                        return (
                            <div key={index} className="grid grid-cols-1 md:grid-cols-[auto,1fr] items-start gap-8 py-10 border-b border-gray-800 last:border-b-0">
                                <div className="flex-shrink-0">
                                    <IconComponent className="w-10 h-10 text-green-500" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                    <p className="text-gray-400">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
