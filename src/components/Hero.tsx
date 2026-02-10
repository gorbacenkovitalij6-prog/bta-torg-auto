'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background with Parallax */}
      <motion.div
        className="absolute inset-0"
        style={{ y, scale }}
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source
            src="/videos/trailer.mp4"
            type="video/mp4"
          />
          <source
            src="https://cdn.pixabay.com/video/2023/05/30/163856-831301062_large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />

      {/* Content with Parallax */}
      <motion.div
        className="relative h-full flex flex-col items-center justify-center text-center text-white px-6"
        style={{ opacity }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl lg:text-6xl xl:text-7xl font-light uppercase tracking-widest mb-6 text-brabus-heading"
        >
          The Next Frontier.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm lg:text-base uppercase tracking-wider mb-8 opacity-90"
        >
          БТА ТОРГ - Автомобили из Германии
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-black text-white px-8 py-3 text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-300 border border-white"
        >
          Узнать больше
        </motion.button>
      </motion.div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm w-full">
        <div className="flex justify-between items-center w-full px-2 sm:px-4 md:px-6 py-3 md:py-4">
          <a
            href="#latest-news"
            className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg uppercase tracking-wider hover:opacity-70 transition-opacity flex-1 text-center px-1"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('latest-news')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Каталог
          </a>
          <a
            href="#team-section"
            className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg uppercase tracking-wider hover:opacity-70 transition-opacity flex-1 text-center px-1"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('team-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Команда
          </a>
          <a
            href="#about-us"
            className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg uppercase tracking-wider hover:opacity-70 transition-opacity flex-1 text-center px-1"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about-us')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            О нас
          </a>
          <a
            href="#reviews-section"
            className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg uppercase tracking-wider hover:opacity-70 transition-opacity flex-1 text-center px-1"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Отзывы
          </a>
        </div>
      </div>
    </section>
  );
}
