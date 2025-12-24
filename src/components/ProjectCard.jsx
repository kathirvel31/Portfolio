import React, { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ProjectCard = ({ title, description, tags, link }) => {
  const cardRef = useRef();
  const { contextSafe } = useGSAP({ scope: cardRef });

 
  const onEnter = contextSafe(() => {
    gsap.to(cardRef.current, {
      y: -20,                       
      scale: 1.02,                  
      backgroundColor: "rgba(139, 92, 246, 0.15)", 
      borderColor: "rgba(168, 85, 247, 0.5)",
      boxShadow: "0 30px 60px -12px rgba(0, 0, 0, 0.5)", 
      duration: 1.2,                
      ease: "power3.out"
    });
  });

  const onLeave = contextSafe(() => {
    gsap.to(cardRef.current, {
      y: 0,
      scale: 1,
      backgroundColor: "rgba(88, 28, 135, 0.1)",
      borderColor: "rgba(126, 34, 206, 0.3)",
      boxShadow: "0 0px 0px rgba(0, 0, 0, 0)",
      duration: 1,                 
      ease: "power3.inOut"
    });
  });

  return (
    <div 
      ref={cardRef}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      
      data-speed="1.05"
      className="bg-gradient-to-br from-purple-900/10 to-purple-950/10 border border-purple-800/30 rounded-xl p-8 transition-none group cursor-pointer will-change-transform"
    >
      <div className="flex justify-between items-start mb-6">
        <h4 className="text-2xl font-bold text-white group-hover:text-purple-400 transition-colors duration-700">
          {title}
        </h4>
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-purple-400 hover:text-purple-300 transition-transform duration-500 hover:scale-110"
        >
          <ExternalLink size={24} />
        </a>
      </div>

      <p className="text-gray-400 mb-6 text-lg leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-3">
        {tags.map((tag, i) => (
          <span 
            key={i}
            className="bg-purple-500/10 border border-purple-500/20 text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;