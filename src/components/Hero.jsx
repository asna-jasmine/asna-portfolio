import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLinkedinIn,
  FaBehance,
  FaGithub,
  FaEnvelope,
} from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { MdOutlineArrowForward } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";

import heroPhone1 from "../assets/images/hero-phone1.png";
import heroPhone2 from "../assets/images/hero-phone2.png";
import resume from "../assets/files/Asna_Jasmine_S_Resume.pdf";
const Hero = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Work", id: "work" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  const handleNavClick = (item) => {
    setActiveItem(item.name);
    setIsMenuOpen(false);
    const sectionId = item.id;
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Floating animation for blobs
  const floatBlob = (duration, delay = 0) => ({
    initial: { y: 0, x: 0 },
    animate: {
      y: [0, -20, 0, 20, 0],
      x: [0, 15, 0, -15, 0],
      scale: [1, 1.05, 1, 0.95, 1],
    },
    transition: {
      duration: duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay,
    },
  });

  return (
    <section id="home" className="min-h-screen pt-28 relative overflow-hidden bg-[#FCFAF8]">
      
      {/* ==================== FIXED NAVBAR ==================== */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-[#F0EAE4]/80 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex justify-between items-center relative">
          {/* Logo */}
          <h1 className="text-3xl font-semibold tracking-wide text-[#4B2E1E]">
            ASNA.
          </h1>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-2 text-[#4B2E1E] text-sm tracking-wide items-center">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item)}
                className={`relative transition-all duration-300 ${
                  activeItem === item.name
                    ? "bg-[#4B2E1E] text-white px-[18px] py-[10px] rounded-full"
                    : "hover:text-[#8B6B4F] px-[18px] py-[10px] rounded-full hover:bg-[#F5EDE8]"
                }`}
                whileHover={activeItem !== item.name ? { scale: 1.05 } : {}}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block md:hidden text-[#3D2C1E] text-3xl focus:outline-none z-50"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Mobile Menu Dropdown */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute top-[calc(100%+12px)] left-4 right-4 md:hidden bg-[#FCFAF8]/95 backdrop-blur-md border border-[#F0EAE4] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-4 flex flex-col gap-1 z-40"
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => handleNavClick(item)}
                    className={`w-full text-left py-3 px-4 rounded-xl transition-all duration-300 text-base font-medium ${
                      activeItem === item.name
                        ? "bg-[#3D2C1E] text-white"
                        : "text-[#3D2C1E] hover:bg-[#F5EDE8]"
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </nav>
      {/* ====================================================== */}

      {/* ==================== BACKGROUND BLEND ==================== */}
      <div className="absolute inset-0 pointer-events-none z-0">
        
        {/* EXISTING SOFT BLOBS */}
        <motion.div {...floatBlob(12, 0)} className="absolute top-[-10%] left-[-8%] w-[450px] h-[450px] rounded-full" style={{ background: "radial-gradient(circle, #E8D5C4 0%, transparent 70%)", filter: "blur(150px)", opacity: 0.25 }} />
        <motion.div {...floatBlob(15, 2)} className="absolute top-[20%] left-[10%] w-[350px] h-[350px] rounded-full" style={{ background: "radial-gradient(circle, #F0E2D8 0%, transparent 70%)", filter: "blur(180px)", opacity: 0.2 }} />
        <motion.div {...floatBlob(18, 4)} className="absolute top-[30%] right-[10%] w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, #EADDD3 0%, transparent 70%)", filter: "blur(200px)", opacity: 0.25 }} />
        <motion.div {...floatBlob(14, 1.5)} className="absolute bottom-[-15%] right-[-10%] w-[550px] h-[550px] rounded-full" style={{ background: "radial-gradient(circle, #F5EBE4 0%, transparent 70%)", filter: "blur(220px)", opacity: 0.3 }} />
        <motion.div {...floatBlob(16, 3)} className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full" style={{ background: "radial-gradient(circle, #F0E4DB 0%, transparent 70%)", filter: "blur(190px)", opacity: 0.15 }} />

        {/* SUBTLE PAPER TEXTURE OVERLAY */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`, backgroundRepeat: 'repeat', backgroundSize: '256px 256px' }} />

        {/* EDITORIAL LINE ART & WATERMARK */}
        <div className="hidden lg:block absolute top-[15%] right-[-5%] select-none">
          <span 
            className="text-[22rem] font-bold text-[#8B6B4F] opacity-[0.04] leading-none tracking-[-0.05em]"
            style={{ 
              fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Times New Roman', serif",
            }}
          >
            DESIGN
          </span>
        </div>
        <div className="absolute top-20 right-0 w-64 h-64 border-r-[1px] border-t-[1px] border-[#8B6B4F] rounded-tr-[120px] opacity-[0.08]"></div>
        <div className="absolute top-[40%] right-[5%] w-96 h-64 border-r-[1px] border-b-[1px] border-[#8B6B4F] rounded-br-[160px] opacity-[0.06]"></div>
        <div className="absolute top-[30%] right-[10%] w-40 h-24 border-r-[1px] border-t-[1px] border-[#8B6B4F] rounded-tr-[60px] opacity-[0.05]"></div>
        <div className="absolute bottom-24 right-0 w-48 h-48 border-r-[1px] border-b-[1px] border-[#8B6B4F] rounded-br-[100px] opacity-[0.07]"></div>
        <div className="absolute top-24 right-12 w-1.5 h-1.5 rounded-full bg-[#8B6B4F] opacity-[0.08]"></div>
        <div className="absolute bottom-32 right-8 w-1 h-1 rounded-full bg-[#8B6B4F] opacity-[0.06]"></div>
        
      </div>
      {/* ====================================================== */}

      {/* ---------------- HERO CONTENT ---------------- */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 items-center min-h-[calc(100vh-112px)] relative z-10">
        
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="uppercase tracking-[4px] text-[#9C7B63] mb-4 text-sm font-light">
            Hi, I'm
          </p>

          <h1
            className="text-7xl lg:text-8xl leading-[0.9] tracking-[-3px] text-[#3D2C1E]"
            style={{ 
              fontFamily: "'Cormorant Garamond', 'Playfair Display', 'Times New Roman', serif",
              fontWeight: 600,
              letterSpacing: '-0.02em',
            }}
          >
            Asna Jasmine
          </h1>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-[#3D2C1E] tracking-[-0.5px]">
            Designing Solutions,
            <br />
            <span className="text-[#8B6B4F]">
              Not Just Screens.
            </span>
          </h2>

          <p className="mt-8 text-lg text-[#6E5A4B] leading-8 max-w-xl font-light">
            I design intuitive digital experiences by understanding users,
            simplifying complex problems, and transforming ideas into
            meaningful products that people enjoy using.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-3 sm:gap-6 mt-10">
            <motion.button 
              onClick={() => {
                document.getElementById("work")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                setActiveItem("Work");
              }}
              className="bg-[#3D2C1E] text-white px-8 py-4 rounded-full flex items-center gap-2 shadow-lg hover:shadow-xl transition-all w-full sm:w-auto justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Projects
              <MdOutlineArrowForward />
            </motion.button>
           <motion.a
  href={resume}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white border border-[#DDD] px-8 py-4 rounded-full flex items-center gap-2 shadow-sm hover:shadow-md transition-all"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  <HiDownload />
  View Resume
</motion.a>
          </div>

          {/* SOCIAL - ICONS ONLY */}
          <div className="flex gap-8 mt-14 text-[#3D2C1E]">
            <motion.a
              href="https://www.linkedin.com/in/asna-jasmine/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ color: "#8B6B4F", scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-xl"
            >
              <FaLinkedinIn />
            </motion.a>

            <motion.a
              href="https://www.behance.net/asnajasmine"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ color: "#8B6B4F", scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-xl"
            >
              <FaBehance />
            </motion.a>

            <motion.a
              href="https://github.com/asna-jasmine"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ color: "#8B6B4F", scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-xl"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              href="mailto:asnajasmines15@gmail.com"
              whileHover={{ color: "#8B6B4F", scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer text-xl"
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </motion.div>

        {/* ==================== RIGHT: PREMIUM PHONE MOCKUPS ==================== */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="relative flex justify-center items-center w-full mt-10 lg:mt-0 min-h-[250px] sm:min-h-[350px] lg:min-h-[550px]"
        >
          {/* Soft background glow behind the phones */}
          <motion.div 
            className="absolute w-[450px] h-[450px] bg-[#EEDFD2] rounded-full blur-3xl opacity-40"
            animate={{
              scale: [1, 1.05, 1],
              opacity: [0.4, 0.5, 0.4],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* ============================================================ */}
          {/* PHONE 2 - Background (Slightly rotated, offset upward & right) */}
          {/* ============================================================ */}
          {/* 
             FIX: On mobile (below sm), we reduce the width, remove the right-offset 
             so it centers perfectly, and add a slight negative top margin to hide the 
             gap between the phones.
          */}
          <motion.div
            animate={{ y: [10, -10, 10] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            className="absolute top-[-10px] right-[-5px] sm:top-[-20px] sm:right-[-5px] lg:top-[-30px] lg:right-[-20px] z-10 rotate-[6deg]"
          >
            {/* Premium Phone Frame */}
            <div className="relative w-[160px] sm:w-[240px] lg:w-[280px] aspect-[9/19.5] rounded-[32px] sm:rounded-[38px] lg:rounded-[44px] bg-gradient-to-br from-[#3a3a3a] via-[#1c1c1c] to-[#2a2a2a] p-[3px] shadow-[0_20px_50px_rgba(0,0,0,0.25),inset_0_2px_4px_rgba(255,255,255,0.1)]">
              <div className="relative w-full h-full rounded-[29px] sm:rounded-[35px] lg:rounded-[41px] bg-black overflow-hidden">
                <img
                  src={heroPhone2}
                  alt="EduGuide App Screen 2"
                  className="w-full h-full object-cover object-center rounded-[29px] sm:rounded-[35px] lg:rounded-[41px]"
                />
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-[28%] h-[3.5%] bg-black rounded-full shadow-[inset_0_0_4px_rgba(255,255,255,0.15)]"></div>
              </div>
            </div>
          </motion.div>
          {/* ============================================================ */}

          {/* ============================================================ */}
          {/* PHONE 1 - Main/Front (Upright, larger, in front) */}
          {/* ============================================================ */}
          {/* 
             FIX: On mobile (below sm), we scale it down slightly so it doesn't 
             push against the viewport edges, while keeping it perfectly centered.
          */}
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            className="relative z-20"
          >
            {/* Premium Phone Frame */}
            <div className="relative w-[180px] sm:w-[260px] lg:w-[310px] aspect-[9/19.5] rounded-[36px] sm:rounded-[42px] lg:rounded-[48px] bg-gradient-to-br from-[#3a3a3a] via-[#1c1c1c] to-[#2a2a2a] p-[3px] shadow-[0_30px_70px_rgba(0,0,0,0.35),0_10px_20px_rgba(0,0,0,0.2),inset_0_1px_2px_rgba(255,255,255,0.15)]">
              <div className="relative w-full h-full rounded-[33px] sm:rounded-[39px] lg:rounded-[45px] bg-black overflow-hidden">
                <img
                  src={heroPhone1}
                  alt="EduGuide App Screen 1"
                  className="w-full h-full object-cover object-center rounded-[33px] sm:rounded-[39px] lg:rounded-[45px]"
                />
                <div className="absolute top-1.5 left-1/2 transform -translate-x-1/2 w-[28%] h-[3.5%] bg-black rounded-full shadow-[inset_0_0_4px_rgba(255,255,255,0.15)]"></div>
              </div>
            </div>
          </motion.div>
          {/* ============================================================ */}

        </motion.div>
        {/* ============================================================ */}

      </div>
    </section>
  );
};

export default Hero;