import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  // Scroll reveal wrapper
  const ScrollReveal = ({ children, delay = 0.2, direction = "up" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    
    const variants = {
      hidden: {
        opacity: 0,
        y: direction === "up" ? 40 : 0,
        x: direction === "left" ? -30 : direction === "right" ? 30 : 0,
      },
      visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut", delay },
      },
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants}
      >
        {children}
      </motion.div>
    );
  };

  // Floating animation for profile card
  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-8, 8, -8],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="about" className="bg-[#FCFAF8] py-24 lg:py-32 overflow-hidden relative">
      
      {/* Subtle background blob (Existing) */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#F0E2D8] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] bg-[#E8D5C4] rounded-full blur-[130px] opacity-15 pointer-events-none"></div>

      {/* ========================================================== */}
      {/* SUBTLE EDITORIAL LINE ART - ADDED */}
      {/* ========================================================== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        
        {/* LARGE INCOMPLETE OVAL - Upper Left */}
        <div className="hidden lg:block absolute top-[-20%] left-[-10%] w-[500px] h-[500px] border-[1px] border-[#8B6B4F] rounded-full opacity-[0.04]"></div>
        
        {/* SWEEPING CURVED ARC - Right Side */}
        <div className="hidden lg:block absolute top-[20%] right-0 w-[300px] h-[400px] border-r-[1px] border-b-[1px] border-[#8B6B4F] rounded-br-[200px] opacity-[0.05]"></div>

        {/* TINY DECORATIVE DOTS - Near the Right Arc */}
        <div className="hidden lg:block absolute top-[40%] right-[20px] w-1 h-1 rounded-full bg-[#8B6B4F] opacity-[0.06]"></div>
        <div className="hidden lg:block absolute top-[50%] right-[60px] w-1.5 h-1.5 rounded-full bg-[#8B6B4F] opacity-[0.04]"></div>
        
      </div>
      {/* ========================================================== */}

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        {/* Section Header */}
        <ScrollReveal delay={0.1}>
          <div className="mb-16 lg:mb-20">
            <p className="uppercase tracking-[4px] text-[#9C7B63] mb-3 text-sm font-light">
              About Me
            </p>
            <h2 
              className="text-5xl lg:text-6xl text-[#3D2C1E] leading-tight"
              style={{ 
                fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Times New Roman', serif",
                fontWeight: 600,
                letterSpacing: '-0.02em',
              }}
            >
              The story behind the designer.
            </h2>
          </div>
        </ScrollReveal>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT SIDE - Profile Card */}
          <ScrollReveal delay={0.2} direction="left">
            <motion.div
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="bg-white rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-[#F0EAE4] p-8 lg:p-10 hover:shadow-[0_30px_80px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              {/* Profile Image Placeholder - Premium "AJ" Monogram */}
              <div className="flex justify-center mb-6">
                <div className="relative w-40 h-40 lg:w-48 lg:h-48">
                  {/* Outer decorative ring */}
                  <div className="absolute inset-0 rounded-full border border-[#E8DDD5] opacity-60"></div>
                  <div className="absolute inset-2 rounded-full border border-[#F0EAE4] opacity-40"></div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#F5EDE8] to-[#E8DDD5] border-4 border-white shadow-xl flex items-center justify-center overflow-hidden">
                    {/* Abstract UI dots element */}
                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#8B6B4F]/20"></div>
                    <div className="absolute bottom-6 left-6 w-1.5 h-1.5 rounded-full bg-[#8B6B4F]/20"></div>
                    <div className="absolute top-1/2 left-3 w-1 h-6 rounded-full bg-[#8B6B4F]/10 transform -translate-y-1/2"></div>
                    
                    {/* Main Monogram */}
                    <span 
                      className="text-5xl lg:text-6xl text-[#3D2C1E] font-bold tracking-tight"
                      style={{ 
                        fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Times New Roman', serif",
                      }}
                    >
                      AJ
                    </span>
                  </div>
                </div>
              </div>

              {/* Name & Title */}
              <div className="text-center">
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
                <p className="text-[#8B6B4F] font-medium mt-1 text-lg">
                  UI/UX Designer
                </p>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-[#FCFAF8] border border-[#F0EAE4] rounded-2xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl mb-1">🎓</div>
                  <p className="text-sm font-medium text-[#3D2C1E]">MCA Student</p>
                </div>
                <div className="bg-[#FCFAF8] border border-[#F0EAE4] rounded-2xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="text-2xl mb-1">💼</div>
                  <p className="text-sm font-medium text-[#3D2C1E]">UI/UX Designer</p>
                </div>
              </div>

              {/* Decorative Line */}
              <div className="mt-8 pt-8 border-t border-[#F0EAE4]">
                <div className="flex justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#8B6B4F]/30"></div>
                  <div className="w-2 h-2 rounded-full bg-[#8B6B4F]/30"></div>
                  <div className="w-2 h-2 rounded-full bg-[#8B6B4F]/30"></div>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* RIGHT SIDE - Content */}
          <div className="space-y-8">
            <ScrollReveal delay={0.3} direction="right">
              <h3 
                className="text-4xl lg:text-5xl text-[#3D2C1E] font-bold leading-tight tracking-[-0.02em]"
                style={{ 
                  fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Times New Roman', serif",
                  fontWeight: 600,
                }}
              >
                Designing experiences with empathy,
                <br />
                <span className="text-[#8B6B4F]">research and simplicity.</span>
              </h3>
            </ScrollReveal>

            <ScrollReveal delay={0.4} direction="right">
              <div className="space-y-4 text-[#6E5A4B] leading-7 font-light">
                <p>
                  I started my journey in technology with curiosity and gradually 
                  discovered my passion for solving real-world problems through design.
                </p>
                <p>
                  As a UI/UX Designer, I enjoy understanding users, identifying pain points, 
                  and transforming complex ideas into simple, meaningful digital experiences.
                </p>
                <p>
                  I believe great design is not only beautiful but also useful, accessible, 
                  and human-centered.
                </p>
                <p>
                  Currently, I am pursuing my MCA while continuously improving my design thinking, 
                  user research, prototyping, and interaction design skills.
                </p>
              </div>
            </ScrollReveal>

            {/* Design Philosophy Card */}
            <ScrollReveal delay={0.5} direction="right">
              <motion.div 
                className="mt-4 bg-white rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#F0EAE4] p-8 hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1"
                whileHover={{ scale: 1.01 }}
              >
                <h4 className="text-sm uppercase tracking-[3px] text-[#9C7B63] font-medium mb-3">
                  Design Philosophy
                </h4>
                <p className="text-xl lg:text-2xl text-[#3D2C1E] font-light leading-relaxed">
                  "Understand people first. Design second. Technology should always support human needs."
                </p>
                <div className="mt-4 flex gap-1">
                  <span className="w-8 h-0.5 bg-[#8B6B4F]/40 rounded-full"></span>
                  <span className="w-4 h-0.5 bg-[#8B6B4F]/20 rounded-full"></span>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;