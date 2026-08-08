import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { 
  FiUsers, 
  FiUser, 
  FiGitBranch, 
  FiGrid, 
  FiLayers, 
  FiBox,
  FiMonitor,
  FiSmartphone,
  FiPenTool,
  FiLayout,
  FiFeather,
  FiCpu,
  FiCode,
  FiTerminal,
  FiEye,
  FiMessageCircle,
  FiTarget,
  FiTrendingUp
} from 'react-icons/fi';

const Skills = () => {
  // --- Scroll Reveal Wrapper ---
  const ScrollReveal = ({ children, delay = 0.2 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <section id="skills" className="bg-[#FCFAF8] py-24 lg:py-32 overflow-hidden relative">
      
      {/* ========================================================== */}
      {/* PREMIUM BACKGROUND LINE ART & SOFT BLOBS */}
      {/* ========================================================== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Original Soft Ambient Blob */}
        <div className="absolute top-[-15%] left-[-10%] w-[400px] h-[400px] bg-[#F0E2D8] rounded-full blur-[150px] opacity-20"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#E8D5C4] rounded-full blur-[180px] opacity-15"></div>
        
        {/* EDITORIAL LINE ART 1 - Top Left Curve */}
        <div className="absolute top-10 left-0 w-48 h-32 border-l-[1.5px] border-b-[1.5px] border-[#8B6B4F] rounded-bl-[60px] opacity-[0.12]"></div>
        
        {/* EDITORIAL LINE ART 2 - Bottom Right Curve (Extended) */}
        <div className="absolute bottom-10 right-0 w-72 h-48 border-r-[1.5px] border-b-[1.5px] border-[#8B6B4F] rounded-br-[100px] opacity-[0.12]"></div>
        
        {/* EDITORIAL LINE ART 3 - Small Top Right Accent */}
        <div className="absolute top-16 right-20 w-20 h-20 border-r-[1.5px] border-t-[1.5px] border-[#8B6B4F] rounded-tr-[40px] opacity-[0.10]"></div>
      </div>
      {/* ========================================================== */}

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        
        {/* --- Section Header --- */}
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-16 lg:mb-20">
            <p className="uppercase tracking-[4px] text-[#9C7B63] mb-3 text-sm font-light">
              Skills & Expertise
            </p>
            <h2 
              className="text-5xl lg:text-6xl text-[#3D2C1E] leading-tight"
              style={{ 
                fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Times New Roman', serif",
                fontWeight: 600,
                letterSpacing: '-0.02em',
              }}
            >
              What I bring to the table
            </h2>
            <p className="mt-4 text-lg text-[#6E5A4B] leading-8 max-w-3xl mx-auto font-light">
              A blend of design thinking, technical fundamentals, and collaborative skills to create meaningful digital experiences.
            </p>
          </div>
        </ScrollReveal>

        {/* --- 4 Premium Cards Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* CARD 1 - UI/UX Design */}
          <ScrollReveal delay={0.2}>
            <motion.div 
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(61, 44, 30, 0.15)" }}
              className="bg-white/80 backdrop-blur-sm rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#F0EAE4] p-8 transition-all duration-300 h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F5EDE8] to-[#E8D5C4] flex items-center justify-center text-[#8B6B4F] text-xl">
                  <FiLayers />
                </div>
                <h3 className="text-xl font-semibold text-[#3D2C1E]">UI/UX Design</h3>
              </div>
              <div className="space-y-3 flex-grow">
                {[
                  { icon: FiUsers, label: "User Research" },
                  { icon: FiUser, label: "User Personas" },
                  { icon: FiGitBranch, label: "User Flow" },
                  { icon: FiGrid, label: "Wireframing" },
                  { icon: FiLayers, label: "Prototyping" },
                  { icon: FiBox, label: "High Fidelity UI" },
                  { icon: FiMonitor, label: "Design Systems" },
                  { icon: FiSmartphone, label: "Responsive Design" },
                ].map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3 text-[#6E5A4B] font-light"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <skill.icon className="text-[#9C7B63] text-sm shrink-0" />
                    <span className="text-sm">{skill.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>

          {/* CARD 2 - Design Tools */}
          <ScrollReveal delay={0.3}>
            <motion.div 
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(61, 44, 30, 0.15)" }}
              className="bg-white/80 backdrop-blur-sm rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#F0EAE4] p-8 transition-all duration-300 h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F5EDE8] to-[#E8D5C4] flex items-center justify-center text-[#8B6B4F] text-xl">
                  <FiFeather />
                </div>
                <h3 className="text-xl font-semibold text-[#3D2C1E]">Design Tools</h3>
              </div>
              <div className="space-y-4 flex-grow">
                {[
                  { icon: FiPenTool, label: "Figma" },
                  { icon: FiLayout, label: "Canva" },
                  { icon: FiFeather, label: "FigJam" },
                  { icon: FiMonitor, label: "Miro" },
                  { icon: FiCpu, label: "VS Code" },
                ].map((tool, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3 text-[#6E5A4B] font-light"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#FCFAF8] border border-[#F0EAE4] flex items-center justify-center text-[#8B6B4F]">
                      <tool.icon className="text-base" />
                    </div>
                    <span className="text-sm">{tool.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>

          {/* CARD 3 - Basic Web Knowledge */}
          <ScrollReveal delay={0.4}>
            <motion.div 
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(61, 44, 30, 0.15)" }}
              className="bg-white/80 backdrop-blur-sm rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#F0EAE4] p-8 transition-all duration-300 h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F5EDE8] to-[#E8D5C4] flex items-center justify-center text-[#8B6B4F] text-xl">
                  <FiCode />
                </div>
                <h3 className="text-xl font-semibold text-[#3D2C1E]">Basic Web Knowledge</h3>
              </div>
              <div className="space-y-4 flex-grow">
                {[
                  { icon: FiCode, label: "HTML" },
                  { icon: FiTerminal, label: "CSS" },
                  { icon: FiMonitor, label: "Responsive Layout" },
                  { icon: FiLayout, label: "UI Implementation" },
                  { icon: FiCpu, label: "Basic React Knowledge" },
                ].map((tech, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3 text-[#6E5A4B] font-light"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#FCFAF8] border border-[#F0EAE4] flex items-center justify-center text-[#8B6B4F]">
                      <tech.icon className="text-base" />
                    </div>
                    <span className="text-sm">{tech.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>

          {/* CARD 4 - Professional Skills */}
          <ScrollReveal delay={0.5}>
            <motion.div 
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(61, 44, 30, 0.15)" }}
              className="bg-white/80 backdrop-blur-sm rounded-[32px] shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-[#F0EAE4] p-8 transition-all duration-300 h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F5EDE8] to-[#E8D5C4] flex items-center justify-center text-[#8B6B4F] text-xl">
                  <FiUsers />
                </div>
                <h3 className="text-xl font-semibold text-[#3D2C1E]">Professional Skills</h3>
              </div>
              <div className="space-y-4 flex-grow">
                {[
                  { icon: FiEye, label: "Design Thinking" },
                  { icon: FiTarget, label: "Problem Solving" },
                  { icon: FiMessageCircle, label: "Communication" },
                  { icon: FiUsers, label: "Collaboration" },
                  { icon: FiTrendingUp, label: "Continuous Learning" },
                ].map((skill, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-3 text-[#6E5A4B] font-light"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.05 }}
                  >
                    <div className="w-8 h-8 rounded-lg bg-[#FCFAF8] border border-[#F0EAE4] flex items-center justify-center text-[#8B6B4F]">
                      <skill.icon className="text-base" />
                    </div>
                    <span className="text-sm">{skill.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default Skills;