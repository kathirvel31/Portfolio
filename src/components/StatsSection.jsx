import React, { useEffect, useRef, useState } from 'react';
import { Code, Rocket, Coffee, Star } from 'lucide-react';
import { statsData } from '../data/portfolioData';

const iconMap = { Code, Rocket, Coffee, Star };

const StatsSection = () => {
  const statsRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          animateStats();
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateStats = () => {
    statsData.forEach((stat, index) => {
      const element = document.getElementById(`stat-${index}`);
      if (element) {
        let current = 0;
        const increment = stat.value / 50;
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            element.textContent = stat.value.toLocaleString();
            clearInterval(timer);
          } else {
            element.textContent = Math.floor(current).toLocaleString();
          }
        }, 30);
      }
    });
  };

  return (
    <section ref={statsRef} className="py-20">
      <h2 className="text-4xl font-bold text-white text-center mb-16">
        My Journey in{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
          Numbers
        </span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => {
          const Icon = iconMap[stat.icon];
          return (
            <div
              key={index}
              className="bg-zinc-900 border border-blue-500/20 rounded-xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 group"
            >
              <Icon className="w-12 h-12 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
              <div className="text-5xl font-bold text-white mb-2">
                <span id={`stat-${index}`}>0</span>
                <span className="text-blue-500">{stat.suffix}</span>
              </div>
              <div className="text-gray-400 text-sm font-medium">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;