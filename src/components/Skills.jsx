import React, { useRef } from 'react';
import { skills } from '../data/skills';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Skills = () => {
  const container = useRef();

  useGSAP(() => {

    gsap.from(".skill-badge", {
      y: 20,
      opacity: 0,
      duration: 1,
      stagger: 0.05,
      ease: "power3.out",
    });
  }, { scope: container });

  
  const { contextSafe } = useGSAP({ scope: container });

  const onEnter = contextSafe((e) => {
    gsap.to(e.currentTarget, {
      y: -8,
      scale: 1.05,
      backgroundColor: "rgba(139, 92, 246, 0.25)",
      borderColor: "rgba(168, 85, 247, 0.8)",
      color: "#c084fc",
      duration: 0.4,
      ease: "power2.out"
    });
  });

  const onLeave = contextSafe((e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      backgroundColor: "rgba(88, 28, 135, 0.15)",
      borderColor: "rgba(126, 34, 206, 0.5)",
      color: "#e5e7eb",
      duration: 0.4,
      ease: "power2.inOut"
    });
  });

  return (
    <section 
      id="skills" 
      ref={container}
      className="py-24 px-6 bg-gradient-to-b from-black to-black-950/20"
    >
      <div className="max-w-4xl mx-auto">
        <h3 className="text-4xl font-bold mb-12 text-white text-center">
          Skills
        </h3>
        
        <div className="flex flex-wrap gap-4">
          {skills.map((skill, index) => (
            <div 
              key={index}
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
            
              className="skill-badge cursor-default bg-gradient-to-br from-blue-900/20 to-blue-950/20 border border-blue-700/50 px-6 py-3 rounded-lg"
            >
              <span className="text-lg text-gray-200 pointer-events-none">
                {skill}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;