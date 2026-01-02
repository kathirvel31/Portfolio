import React, { useRef } from 'react';
import ExperienceCard from './ExperienceCard';
import { experiences } from '../data/experiences';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Experience = () => {
  const container = useRef();

  useGSAP(() => {
   
    const cards = gsap.utils.toArray('.exp-card');

    cards.forEach((card) => {
      
      const hoverTl = gsap.timeline({ paused: true });
      
      hoverTl.to(card, {
        y: -10,            
        scale: 1.02,        
        backgroundColor: "rgba(139, 92, 246, 0.1)", 
        borderColor: "rgba(168, 85, 247, 0.4)",     
        duration: 0.3,
        ease: "power2.out"
      });

     
      card.addEventListener('mouseenter', () => hoverTl.play());
      card.addEventListener('mouseleave', () => hoverTl.reverse());
    });
  }, { scope: container });

  return (
    <section 
      ref={container} 
      id="experience" 
      className="py-20 px-6 bg-gradient-to-b from-black to-black-950/20"
    >
      <div className="max-w-4xl mx-auto">
        <h3 className="text-4xl font-bold mb-12 text-white text-center">
          Work Experience
        </h3>
        
        <div className="flex flex-col gap-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="exp-card border border-white/10 rounded-xl transition-colors duration-300"
            >
              <ExperienceCard {...exp} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;