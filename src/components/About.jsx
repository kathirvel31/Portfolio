import React, { useRef } from 'react';
import { personalInfo } from '../data/personalInfo';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef();

  useGSAP(() => {
    
    gsap.from(".reveal-text", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.2, 
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%", 
        toggleActions: "play none none reverse", 
      }
    });
  }, { scope: sectionRef });

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-32 px-6 bg-gradient-to-b from-black to-black-950/20"
    >
      <div className="max-w-4xl mx-auto">
        <h3 className="reveal-text text-4xl font-bold mb-12 text-white text-center">
          About Me
        </h3>
        
        <div className="space-y-8">
          <p className="reveal-text text-lg text-gray-300 leading-relaxed">
            {personalInfo.about.paragraph1}
          </p>
          
          <p className="reveal-text text-lg text-gray-300 leading-relaxed">
            {personalInfo.about.paragraph2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;