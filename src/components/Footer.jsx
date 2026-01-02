import React, { useRef } from 'react';
import { personalInfo } from '../data/personalInfo';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';


gsap.registerPlugin(ScrambleTextPlugin);

const Footer = () => {
  const footerRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline();

   
    tl.to(".footer-name", {
      duration: 1.5,
      scrambleText: {
        text: personalInfo.name,
        chars: "upperCase",
        speed: 0.5,
        revealDelay: 0.2,
      }
    })
    
    .from(".footer-text", {
      opacity: 0,
      y: 5,
      duration: 1,
      ease: "power2.out"
    }, "-=0.5");

  }, { scope: footerRef });

  return (
    <footer 
      ref={footerRef} 
      className="border-t border-blue-900/30 py-12 px-6 text-center text-gray-400"
    >
      <div className="max-w-4xl mx-auto">
        <p className="footer-text text-sm uppercase tracking-widest mb-2 opacity-60">
          Designed & Developed by
        </p>
        
        {/* Removed data-speed as we are not using ScrollSmoother anymore */}
        <h4 className="footer-name text-xl font-bold text-blue-400 mb-6">
          {/* GSAP will inject name */}
        </h4>

        <p className="footer-text text-sm">
          © {new Date().getFullYear()} — All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;