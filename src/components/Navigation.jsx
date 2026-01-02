import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-blue-500/20 py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          <a href="#">Kathirvel</a>
        </h1>
        
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          <a href="#about" className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium hover-target">About</a>
          <a href="#experience" className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium hover-target">Experience</a>
          <a href="#projects" className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium hover-target">Projects</a>
          <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium hover-target">Skills</a>
          <a href="#contact" className="bg-blue-600/10 border border-blue-500/50 px-5 py-2 rounded-full text-blue-400 hover:bg-blue-600 hover:text-white transition-all text-sm hover-target">
            Contact
          </a>
        </div>

        {/* Mobile Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-blue-400 p-2 hover-target"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Smooth Slide Down */}
      <div className={`absolute top-full left-0 w-full bg-black/95 border-b border-blue-900/30 transition-all duration-300 ease-in-out origin-top ${
        menuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
      } md:hidden`}>
        <div className="flex flex-col px-6 py-8 gap-6 text-center">
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-xl text-gray-300 hover:text-blue-400">About</a>
          <a href="#experience" onClick={() => setMenuOpen(false)} className="text-xl text-gray-300 hover:text-blue-400">Experience</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="text-xl text-gray-300 hover:text-blue-400">Projects</a>
          <a href="#skills" onClick={() => setMenuOpen(false)} className="text-xl text-gray-300 hover:text-blue-400">Skills</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-xl text-blue-400 font-bold">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;