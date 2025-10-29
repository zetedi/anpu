import React from 'react';
import type { Content } from '../types';

interface TeamProps {
  content: Content['team'];
}

const Team: React.FC<TeamProps> = ({ content }) => {
  return (
    <section id="team" className="py-24 bg-black">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-white mb-16">{content.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {content.members.map((member, index) => (
            <div key={index} className="bg-gray-900/50 p-8 rounded-lg border border-transparent hover:border-green-500/50 transition-colors duration-300">
              <img
                src={`https://picsum.photos/200/200?image=${1040 + index}`}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-green-400 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
