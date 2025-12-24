import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';

const ExperienceCard = ({ company, role, duration, location, description, achievements }) => {
  return (
    <div className="relative pl-8 pb-12 border-l-2 border-purple-800/50 last:pb-0">
      {/* Timeline dot */}
      <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-purple-600 border-4 border-black"></div>
      
      <div className="bg-gradient-to-br from-purple-900/20 to-purple-950/20 border border-purple-800/30 rounded-lg p-6 hover:border-purple-600/50 transition">
        {/* Company and Role */}
        <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
          <div>
            <h4 className="text-2xl font-bold text-white mb-1">{role}</h4>
            <div className="flex items-center gap-2 text-purple-400">
              <Briefcase size={18} />
              <span className="text-lg font-semibold">{company}</span>
            </div>
          </div>
        </div>

        {/* Duration and Location */}
        <div className="flex items-center gap-4 text-gray-400 mb-4 flex-wrap">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>{duration}</span>
          </div>
          {location && (
            <span className="text-gray-500">• {location}</span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-4">{description}</p>

        {/* Achievements */}
        {achievements && achievements.length > 0 && (
          <ul className="space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-300">
                <span className="text-purple-400 mt-1">▹</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ExperienceCard;