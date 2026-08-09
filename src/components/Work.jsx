import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MdOutlineArrowForward } from 'react-icons/md';

// IMPORT YOUR PHONE MOCKUPS HERE
import heroPhone1 from "../assets/images/hero-phone1.png";
import heroPhone2 from "../assets/images/hero-phone2.png";

const Work = () => {
  // Animation wrapper for scroll-reveal
  const ScrollReveal = ({ children, delay = 0.2 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <section 
      id="work"
      className="bg-[#FCFAF8] py-24 lg:py-32 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* ---------------- SECTION HEADER ---------------- */}
        <ScrollReveal delay={0.1}>
          <div className="mb-16 lg:mb-24">
            <p className="uppercase tracking-[4px] text-[#9C7B63] mb-4 text-sm font-light">
              Featured Project
            </p>
            <h2 
              className="text-5xl lg:text-6xl text-[#3D2C1E] leading-tight"
              style={{ 
                fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Times New Roman', serif",
                fontWeight: 600,
                letterSpacing: '-0.02em',
              }}
            >
              EduGuide
            </h2>
            {/* Fixed header description: added w-full and max-w restrictions for mobile/desktop */}
            <p className="mt-4 text-lg text-[#6E5A4B] leading-8 max-w-full sm:max-w-2xl font-light break-words">
              A case study focused on solving real student problems through thoughtful UX research and user-centered design.
            </p>
          </div>
        </ScrollReveal>

        {/* ---------------- MAIN PROJECT CARD ---------------- */}
        <ScrollReveal delay={0.3}>
          <div className="bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] p-6 sm:p-8 lg:p-12 border border-[#F0EAE4] overflow-hidden relative w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              
              {/* ========================================================== */}
              {/* LEFT SIDE - PREMIUM FLOATING PHONES (FIXED MOBILE CENTERING) */}
              {/* ========================================================== */}
              {/* Changed from fixed absolute to relative/flex-col on mobile (md:flex-row) to perfectly center and scale phones on small screens */}
              <div className="relative flex flex-col md:flex-row justify-center items-center min-h-[250px] sm:min-h-[350px] lg:min-h-[500px] w-full">
                
                {/* Phone 1 (Back - Slightly rotated) */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="relative md:absolute left-0 lg:left-4 top-10 z-10 rotate-[-6deg] mx-auto mt-0 md:mt-0 w-[140px] sm:w-[180px] lg:w-[240px]"
                >
                  <div className="aspect-[9/19.5] rounded-[32px] lg:rounded-[38px] bg-gradient-to-br from-[#3a3a3a] via-[#1c1c1c] to-[#2a2a2a] p-[3px] shadow-[0_20px_40px_rgba(0,0,0,0.15),inset_0_2px_4px_rgba(255,255,255,0.1)]">
                    <div className="relative w-full h-full rounded-[29px] lg:rounded-[35px] bg-black overflow-hidden">
                      <img 
                        src={heroPhone1} 
                        alt="EduGuide Mockup 1" 
                        className="w-full h-full object-cover object-center" 
                      />
                      <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-[28%] h-[3.5%] bg-black rounded-full shadow-[inset_0_0_4px_rgba(255,255,255,0.15)]"></div>
                    </div>
                  </div>
                </motion.div>

                {/* Phone 2 (Front - Larger, less rotated, in front) */}
                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  className="relative md:absolute right-0 lg:right-4 bottom-10 z-20 rotate-[4deg] mx-auto -mt-10 md:mt-0 w-[150px] sm:w-[200px] lg:w-[240px]"
                >
                  <div className="aspect-[9/19.5] rounded-[32px] lg:rounded-[38px] bg-gradient-to-br from-[#3a3a3a] via-[#1c1c1c] to-[#2a2a2a] p-[3px] shadow-[0_25px_50px_rgba(0,0,0,0.2),inset_0_2px_4px_rgba(255,255,255,0.1)]">
                    <div className="relative w-full h-full rounded-[29px] lg:rounded-[35px] bg-black overflow-hidden">
                      <img 
                        src={heroPhone2} 
                        alt="EduGuide Mockup 2" 
                        className="w-full h-full object-cover object-center" 
                      />
                      <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-[28%] h-[3.5%] bg-black rounded-full shadow-[inset_0_0_4px_rgba(255,255,255,0.15)]"></div>
                    </div>
                  </div>
                </motion.div>

              </div>
              {/* ========================================================== */}

              {/* RIGHT SIDE - CONTENT */}
              <div className="flex flex-col justify-center w-full min-w-0">
                <h3 className="text-4xl lg:text-5xl text-[#3D2C1E] font-bold tracking-[-0.02em] break-words">
                  EduGuide
                </h3>
                <p className="text-[#8B6B4F] font-medium mt-2 text-lg break-words">
                  Career Guidance & Scholarship Mobile Application
                </p>
                
                {/* ========================================================== */}
                {/* FIXED: Paragraph 1 - Removed max-w-md on mobile to prevent clipping. */}
                {/* ========================================================== */}
                <p className="text-[#6E5A4B] leading-6 sm:leading-7 lg:leading-8 font-light mt-6 w-full lg:max-w-md break-words text-sm sm:text-base lg:text-lg">
                  EduGuide helps students explore career paths, discover scholarships, and make informed academic decisions through a simple and intuitive mobile experience.
                </p>
                {/* ========================================================== */}

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mt-8 w-full">
                  {['User Research', 'Personas', 'User Flow', 'Wireframes', 'Prototype', 'UI Design'].map((tag) => (
                    <span key={tag} className="bg-[#F5EDE8] text-[#6E5A4B] px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-[#EAE0D8] whitespace-nowrap">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-3 mt-10 w-full">
                  {/* Primary Button: View Case Study */}
                  <motion.a
                    href="https://www.behance.net/gallery/253336659/Edu-Guide-Mobile-UX-Case-Study/modules/1472478087"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#3D2C1E] text-white px-8 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Case Study
                    <MdOutlineArrowForward />
                  </motion.a>

                  {/* Secondary Button: Explore Prototype */}
                  <motion.a
                    href="https://www.figma.com/proto/owjXrL6LuaQeWLasiz19UF/EDUGUIDE_APP?page-id=0%3A1&node-id=4-120&viewport=438%2C118%2C0.22&t=Gs4LE3s7iknpPVrk-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2%3A5&show-proto-sidebar=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-[#EAE0D8] text-[#3D2C1E] px-8 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-sm hover:shadow-md transition-all w-full sm:w-auto"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Prototype
                    <MdOutlineArrowForward />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* ---------------- PROBLEM & SOLUTION CARDS ---------------- */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-10 mt-12 w-full">
          <ScrollReveal delay={0.4}>
            <div className="bg-[#FCFAF8] border border-[#F0EAE4] p-8 lg:p-10 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] h-full w-full">
              <h4 className="text-xl font-semibold text-[#3D2C1E] mb-3">Problem</h4>
              <p className="text-[#6E5A4B] leading-7 font-light break-words">
                Students often struggle to choose the right career after school because information about courses, scholarships and career opportunities is scattered across multiple platforms.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="bg-[#FCFAF8] border border-[#F0EAE4] p-8 lg:p-10 rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.03)] h-full w-full">
              <h4 className="text-xl font-semibold text-[#3D2C1E] mb-3">Solution</h4>
              <p className="text-[#6E5A4B] leading-7 font-light break-words">
                EduGuide brings career guidance, scholarships, government exams and personalized recommendations together in one intuitive mobile application.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* ========================================================== */}
        {/* UX PROCESS TIMELINE (FIXED MOBILE VERTICAL LAYOUT) */}
        {/* ========================================================== */}
        <div className="mt-24 lg:mt-32 text-center w-full">
          <ScrollReveal delay={0.2}>
            <h3 className="text-3xl lg:text-4xl text-[#3D2C1E] font-bold tracking-[-0.02em] mb-16 break-words">
              UX Process Timeline
            </h3>
          </ScrollReveal>

          {/* Added flex-col on mobile (md:flex-row) to handle vertical/horizontal switching */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-center relative max-w-5xl mx-auto w-full">
            
            {/* Background Connecting Line */}
            {/* On mobile: left-8 creates a vertical line down the left side. On desktop: top-1/2 creates a horizontal line across the middle */}
            <div className="absolute left-8 md:left-0 md:top-1/2 w-[1px] md:w-full h-[calc(100%-3rem)] md:h-[1px] bg-[#EAE0D8] -z-10"></div>

            {['Research', 'Survey', 'Personas', 'Wireframes', 'High Fidelity UI', 'Prototype'].map((step, index) => (
              <ScrollReveal key={step} delay={0.3 + index * 0.1}>
                <div className="flex flex-row md:flex-col items-center w-full md:w-auto mb-8 md:mb-0 relative pl-12 md:pl-0 md:pr-4">
                  
                  {/* Timeline Dot/Circle */}
                  <div className="absolute left-0 md:static w-12 h-12 rounded-full bg-[#F5EDE8] border-2 border-[#DBCEC2] flex items-center justify-center text-[#3D2C1E] font-bold shadow-sm z-10">
                    {index + 1}
                  </div>
                  
                  <p className="ml-4 md:ml-0 md:mt-4 text-[#6E5A4B] font-medium text-sm tracking-wide break-words text-left md:text-center">
                    {step}
                  </p>

                  {/* Desktop Arrow connector (Avoids arrow on last item) */}
                  {index !== 5 && (
                    <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-[#DBCEC2] text-2xl font-thin">
                      <MdOutlineArrowForward className="rotate-[-45deg]" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
        {/* ========================================================== */}

      </div>
    </section>
  );
};

export default Work;