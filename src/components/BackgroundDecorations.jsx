import React from 'react';

// A reusable component to sprinkle organic line-art behind your sections.
// Because of the z-index and absolute positioning, it will never interfere with text or cards.
const BackgroundDecorations = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
      
      {/* HERO SECTION DECORATION (Near the bottom left corner) */}
      <div className="hidden lg:block absolute top-[5%] left-0 w-64 h-64 border-l-[1px] border-b-[1px] border-[#8B6B4F] rounded-bl-[80px] opacity-[0.06]"></div>

      {/* WORK SECTION DECORATION (Top Right) */}
      <div className="hidden lg:block absolute top-[30%] right-0 w-48 h-48 border-r-[1px] border-t-[1px] border-[#8B6B4F] rounded-tr-[60px] opacity-[0.08]"></div>

      {/* ABOUT SECTION DECORATION (Flowing arc) */}
      <div className="hidden lg:block absolute top-[55%] left-0 w-72 h-32 border-l-[1px] border-t-[1px] border-[#8B6B4F] rounded-tl-[100px] opacity-[0.05]"></div>
      <div className="hidden lg:block absolute top-[55%] left-8 w-72 h-32 border-l-[1px] border-b-[1px] border-[#8B6B4F] rounded-bl-[100px] opacity-[0.05]"></div>

      {/* SKILLS SECTION DECORATION (Slightly more visible curved corner) */}
      <div className="hidden lg:block absolute top-[80%] right-0 w-80 h-64 border-r-[1px] border-b-[1px] border-[#8B6B4F] rounded-br-[120px] opacity-[0.10]"></div>

      {/* CONTACT SECTION DECORATION (Elegant flowing line at the bottom) */}
      <div className="hidden lg:block absolute bottom-0 left-1/2 transform -translate-x-1/2 w-96 h-20 border-t-[1px] border-[#8B6B4F] rounded-t-[80px] opacity-[0.08]"></div>
      
    </div>
  );
};

export default BackgroundDecorations;