import React from 'react';
import { TrendingUp } from 'lucide-react';
import { trendingTechData } from '../data/portfolioData';

const TechSection = () => {
  return (
    <section className="py-20">
      <div className="flex items-center justify-center gap-3 mb-16">
        <TrendingUp className="w-8 h-8 text-blue-500" />
        <h2 className="text-4xl font-bold text-white">Current Tech Stack</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {trendingTechData.map((tech, index) => (
          <div
            key={index}
            className="bg-zinc-900 border border-blue-500/20 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-white font-semibold text-lg">{tech.name}</span>
              {tech.trend === 'hot' ? (
                <span className="text-xs bg-gradient-to-r from-blue-600 to-blue-500 text-white px-3 py-1 rounded-full animate-pulse font-semibold">
                  🔥 HOT
                </span>
              ) : (
                <span className="text-blue-400 text-sm font-semibold">↗ Trending</span>
              )}
            </div>
            <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-blue-600 to-blue-400 h-full rounded-full transition-all duration-1000 group-hover:animate-pulse"
                style={{ width: tech.percentage }}
              ></div>
            </div>
            <div className="text-right text-xs text-gray-500 mt-2 font-medium">
              {tech.percentage} adoption
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSection;