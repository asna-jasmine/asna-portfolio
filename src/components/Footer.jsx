import React from 'react';
import { FiLinkedin, FiGithub, FiMail, FiExternalLink } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FCFAF8] border-t border-[#F0EAE4] py-12 lg:py-16 relative overflow-hidden">
      {/* Subtle background blob for depth */}
      <div className="absolute top-[-50%] left-[50%] transform -translate-x-1/2 w-[400px] h-[400px] bg-[#F0E2D8] rounded-full blur-[120px] opacity-20 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        
        {/* Name */}
        <h3 
          className="text-3xl lg:text-4xl text-[#3D2C1E]"
          style={{ 
            fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Times New Roman', serif",
            fontWeight: 600,
            letterSpacing: '-0.02em',
          }}
        >
          Asna Jasmine S
        </h3>

        {/* Title / Tagline */}
        <p className="text-[#6E5A4B] font-light mt-2 text-sm lg:text-base tracking-wide">
          UI/UX Designer · Designing with empathy & simplicity.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-5 mt-6">
          <a
            href="https://www.linkedin.com/in/asna-jasmine/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6E5A4B] hover:text-[#3D2C1E] transition-all duration-300 hover:scale-110 inline-flex"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="text-xl" />
          </a>

          <a
            href="https://www.behance.net/asnajasmine"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6E5A4B] hover:text-[#3D2C1E] transition-all duration-300 hover:scale-110 inline-flex"
            aria-label="Behance"
          >
            <FiExternalLink className="text-xl" />
          </a>

          <a
            href="https://github.com/asna-jasmine"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6E5A4B] hover:text-[#3D2C1E] transition-all duration-300 hover:scale-110 inline-flex"
            aria-label="GitHub"
          >
            <FiGithub className="text-xl" />
          </a>

          <a
            href="mailto:asnajasmines15@gmail.com"
            className="text-[#6E5A4B] hover:text-[#3D2C1E] transition-all duration-300 hover:scale-110 inline-flex"
            aria-label="Email"
          >
            <FiMail className="text-xl" />
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-[#F0EAE4]/60">
          <p className="text-[#8B6B4F] text-xs tracking-wider font-light">
            &copy; {currentYear} Asna Jasmine S
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;