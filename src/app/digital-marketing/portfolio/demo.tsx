'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const PortfolioGrid = () => {
  const portfolioItems = [
    { id: 1, image: '/images/portfolio1.png' },
    { id: 2, image: '/images/portfolio2.png' },
    { id: 3, image: '/images/portfolio3.png' },
    { id: 4, image: '/images/portfolio4.png' },
    { id: 5, image: '/images/portfolio5.png' },
    { id: 6, image: '/images/portfolio1.png'},
  ];

  const containerVariants = {
    initial: { y: "0%" },
    animate: {
      y: "-75%",
      transition: {
        repeat: Infinity,
        duration: 60,
        ease: "linear",
        repeatType: "loop" as const,
        repeatDelay: 0,
      },
    },
  };

  const renderPortfolioItems = (items: typeof portfolioItems) => (
    <>
      {[...items, ...items, ...items, ...items].map((item, index) => (
        <div 
          key={`${item.id}-${index}`} 
          className="relative h-[200px] sm:h-[250px] md:h-[300px] overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500"
        >
          <Image
            src={item.image}
            alt="Portfolio item"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      ))}
    </>
  );

  return (
    <div className="relative w-full min-w-[320px] max-w-3xl h-[600px] mx-auto px-2 sm:px-4 overflow-hidden">
      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#cbcdd1]/50">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#6f7278] mb-4 sm:mb-6 text-center px-4">
          Our Creative Portfolio
        </h1>
        <button className="px-6 sm:px-8 py-2 sm:py-3 rounded-full bg-white/20 text-[#6f7278] text-sm sm:text-base font-medium hover:bg-white/60 transition-all duration-300 border border-white/30">
          View All Works
        </button>
      </div>

      {/* Portfolio Grid */}
      <div className="w-full h-[600px] relative z-0">
        <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 h-full py-4">
          <div className="h-full overflow-hidden">
            <motion.div 
              className="grid grid-rows-[12] gap-2 sm:gap-4 md:gap-6"
              initial="initial"
              animate="animate"
              variants={{
                initial: { y: "0%" },
                animate: {
                  y: "-75%",
                  transition: {
                    repeat: Infinity,
                    duration: 60,
                    ease: "linear" as const,
                    repeatType: "loop" as const,
                    repeatDelay: 0
                  }
                }
              }}
            >
              {renderPortfolioItems(portfolioItems.slice(0, 3))}
            </motion.div>
          </div>

          <div className="h-full overflow-hidden">
            <motion.div 
              className="grid grid-rows-[12] gap-2 sm:gap-4 md:gap-6"
              initial="initial"
              animate="animate"
              variants={{
                initial: { y: "0%" },
                animate: {
                  y: "-75%",
                  transition: {
                    repeat: Infinity,
                    duration: 60,
                    ease: "linear" as const,
                    repeatType: "loop" as const,
                    repeatDelay: 0
                  }
                }
              }}
            >
              {renderPortfolioItems(portfolioItems.slice(3, 6))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioGrid;