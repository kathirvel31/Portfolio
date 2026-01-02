import React, { useRef } from 'react';
import { personalInfo } from '../data/personalInfo';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrambleTextPlugin);

const Hero = () => {
  const container = useRef();
  const imageWrapper = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".hero-image", {
      y: 50, 
      opacity: 0,
      duration: 1.2,
      ease: "power3.out"
    })
    .from(".hero-content-wrapper", {
      y: 30,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8")
    .to(".scramble-title", {
      duration: 1.5,
      scrambleText: {
        text: personalInfo.title,
        chars: "upperCase",
        speed: 0.5,
      },
    }, "-=0.5")
    .from(".static-desc", {
      opacity: 0,
      y: 20,
      duration: 1,
      ease: "power2.out"
    }, "-=0.8")
    .from(".hero-btns", {
      opacity: 0,
      y: 15,
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.5");
  }, { scope: container });

  const { contextSafe } = useGSAP({ scope: container });

  const onMouseMove = contextSafe((e) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 15; 
    const y = (clientY - top - height / 2) / 15;

    gsap.to(imageWrapper.current, {
      rotateY: x,
      rotateX: -y,
      transformPerspective: 1000,
      duration: 0.6,
      ease: "power2.out",
      overwrite: "auto", 
    });
  });

  const onMouseLeave = contextSafe(() => {
    gsap.to(imageWrapper.current, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.8,
      ease: "power3.out",
      overwrite: "auto",
    });
  });

  return (
    <section ref={container} className="min-h-screen flex items-center justify-center px-6 pt-20 pb-12 overflow-hidden bg-black">
      {/* flex-col: Mobile & Tablet (stacked)
          lg:flex-row-reverse: Large screens (Desktop) switch to row
      */}
      <div className="max-w-6xl w-full flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
        
        {/* Image Container */}
        <div className="flex-shrink-0 z-10">
          <div 
            ref={imageWrapper}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            className="hero-image w-64 h-64 md:w-80 md:h-80 rounded-2xl border-2 border-blue-500/30 p-2 bg-gradient-to-br from-blue-500/20 to-transparent shadow-2xl relative cursor-pointer"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute -inset-4 bg-blue-600/10 blur-2xl -z-10 rounded-full pointer-events-none"></div>
            <img 
              src={personalInfo.image.url}
              alt={personalInfo.name}
              className="w-full h-full object-cover rounded-xl select-none pointer-events-none"
              style={{ transform: 'translateZ(50px)' }} 
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="hero-content-wrapper text-center lg:text-left flex-1">
          <h2 className="hero-name text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
           <span className='text-xl md:text-2xl text-gray-300 block mb-2 font-medium'>Hi, I am</span> 
           {personalInfo.name}
          </h2>
          
          <p className="scramble-title text-xl md:text-2xl text-blue-300 font-mono mb-6 min-h-[1.5em]">
            {/* GSAP Managed */}
          </p>
          
          <p className="static-desc text-lg text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {personalInfo.description}
          </p>
          
          <div className="hero-btns flex flex-wrap gap-4 justify-center lg:justify-start">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg transition-all hover:scale-105 font-semibold text-white">
              Get In Touch
            </a>
            <a href="#projects" className="border border-blue-600/50 hover:bg-blue-600/10 px-8 py-3 rounded-lg transition-all font-semibold text-gray-200">
              View Work
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;