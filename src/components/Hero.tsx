import React from 'react';
import type { Content } from '../types';

interface HeroProps {
  content: Content['hero'];
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white text-center px-6">
      <div className="absolute inset-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        >
          {/* Using a high-quality nature/tech video */}
          <source src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-7xl font-black leading-tight mb-4 uppercase tracking-tight">{content.title}</h1>
        <p className="text-lg md:text-2xl mb-8 font-light text-gray-300 max-w-2xl mx-auto">{content.subtitle}</p>
        <a 
          href="#" 
          className="bg-green-500 text-black py-3 px-8 rounded-full text-lg font-bold hover:bg-green-400 transition-transform transform hover:scale-105 shadow-lg"
        >
          {content.cta}
        </a>
      </div>
    </section>
  );
};

export default Hero;
