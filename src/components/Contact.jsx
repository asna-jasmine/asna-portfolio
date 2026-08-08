import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FiMail, 
  FiUser, 
  FiExternalLink, 
  FiCode, 
  FiArrowUpRight 
} from 'react-icons/fi';

const Contact = () => {
  // --- Scroll Animation Wrapper ---
  const ScrollReveal = ({ children, delay = 0.2 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay }}
      >
        {children}
      </motion.div>
    );
  };

  const contactItems = [
    { icon: FiMail, label: "Email", href: "mailto:asnajasmines15@gmail.com", text: "asnajasmines15@gmail.com", delay: 0.3 },
    { icon: FiUser, label: "LinkedIn", href: "https://www.linkedin.com/in/asna-jasmine/", text: "linkedin.com/in/asna-jasmine", delay: 0.4 },
    { icon: FiExternalLink, label: "Behance", href: "https://www.behance.net/asnajasmine", text: "behance.net/asnajasmine", delay: 0.5 },
    { icon: FiCode, label: "GitHub", href: "https://github.com/asna-jasmine", text: "github.com/asna-jasmine", delay: 0.6 },
  ];

  return (
    <section id="contact" className="bg-[#FCFAF8] py-24 lg:py-32 overflow-hidden relative">
      
      {/* Ambient Coffee Background Blobs */}
      <div className="absolute top-[-15%] left-[-10%] w-[400px] h-[400px] bg-[#F0E2D8] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#E8D5C4] rounded-full blur-[180px] opacity-15 pointer-events-none"></div>
      
      {/* ========================================================== */}
      {/* CONTACT SECTION LINE ART */}
      {/* ========================================================== */}
      <div className="absolute bottom-16 right-16 w-64 h-64 border-r-[1.5px] border-b-[1.5px] border-[#8B6B4F] rounded-br-[120px] opacity-[0.10] pointer-events-none z-0"></div>
      {/* ========================================================== */}
      
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* --- Grid Layout --- */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* --- Left Column: Heading & Description --- */}
          <div className="flex flex-col gap-8">
            <ScrollReveal delay={0.1}>
              <h2 
                className="text-5xl lg:text-7xl text-[#3D2C1E] leading-[1.1]"
                style={{ 
                  fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Times New Roman', serif",
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                }}
              >
                Let's Create Something Meaningful.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg lg:text-xl text-[#6E5A4B] leading-8 max-w-lg font-light">
                Have a project, opportunity, or idea in mind?<br />
                I'd love to hear about it.
              </p>
            </ScrollReveal>

            {/* "Let's Talk" CTA Button - Visible on Desktop as a secondary action */}
            <ScrollReveal delay={0.7}>
              <div className="hidden lg:block pt-4">
                <motion.a
                  href="mailto:asnajasmines15@gmail.com"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#3D2C1E] text-white rounded-full shadow-[0_10px_30px_rgba(61,44,30,0.15)] hover:shadow-[0_15px_40px_rgba(61,44,30,0.25)] transition-all duration-300 group"
                >
                  <span className="text-lg font-medium tracking-wide">Let's Talk</span>
                  <FiArrowUpRight className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>
              </div>
            </ScrollReveal>
          </div>

          {/* --- Right Column: Contact Links --- */}
          <div className="flex flex-col gap-4 lg:gap-6">
            {contactItems.map((item, index) => (
              <ScrollReveal key={index} delay={item.delay}>
                <motion.a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 6, backgroundColor: "#F5EDE8" }}
                  className="group flex items-center justify-between w-full p-6 lg:p-8 rounded-[32px] bg-white/80 backdrop-blur-sm border border-[#F0EAE4] shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-full bg-[#FCFAF8] border border-[#F0EAE4] flex items-center justify-center text-[#8B6B4F] group-hover:bg-white transition-colors duration-300">
                      <item.icon className="text-xl" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-light text-[#9C7B63] uppercase tracking-wider">
                        {item.label}
                      </span>
                      <span className="text-[#3D2C1E] font-medium text-base lg:text-lg">
                        {item.text}
                      </span>
                    </div>
                  </div>
                  <FiArrowUpRight className="text-[#8B6B4F] text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>
              </ScrollReveal>
            ))}

            {/* "Let's Talk" CTA Button - Visible on Mobile and Tablet only */}
            <ScrollReveal delay={0.7}>
              <div className="lg:hidden pt-4">
                <motion.a
                  href="mailto:asnajasmines15@gmail.com"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-[#3D2C1E] text-white rounded-full shadow-[0_10px_30px_rgba(61,44,30,0.15)] hover:shadow-[0_15px_40px_rgba(61,44,30,0.25)] transition-all duration-300 group"
                >
                  <span className="text-lg font-medium tracking-wide">Let's Talk</span>
                  <FiArrowUpRight className="text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;