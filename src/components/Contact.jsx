import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-4xl font-bold mb-8 text-white text-center">Let's Connect</h3>
        <p className="text-xl text-gray-300 mb-12">
          I'm always open to new opportunities and collaborations. Feel free to reach out!
        </p>
        <div className="flex gap-8 justify-center">
          <a 
            href={`mailto:${personalInfo.contact.email}`}
            className="flex items-center gap-2 text-blue-400 hover:text-purple-300 transition"
          >
            <Mail size={24} />
            <span className="text-lg">Email</span>
          </a>
          <a 
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-purple-300 transition"
          >
            <Github size={24} />
            <span className="text-lg">GitHub</span>
          </a>
          <a 
            href={personalInfo.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-400 hover:text-purple-300 transition"
          >
            <Linkedin size={24} />
            <span className="text-lg">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;