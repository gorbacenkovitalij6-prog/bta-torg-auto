'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const accessories = [
  { image: 'https://i.ibb.co/Ngv90yR0/photo-2026-02-09-13-25-34.jpg', title: 'Отзыв клиента', subtitle: 'Audi Q7 2020' },
  { image: 'https://i.ibb.co/b54qHyGQ/photo-2025-12-18-11-35-12-2.jpg', title: 'Отзыв клиента', subtitle: 'Mercedes S-Class 2020' },
  { image: 'https://i.ibb.co/spFFLSPK/photo-2026-02-09-13-24-52.jpg', title: 'Отзыв клиента', subtitle: 'Porsche Cayenne 2020' },
  { image: 'https://i.ibb.co/TDXbhZv8/photo-2026-02-09-13-26-04.jpg', title: 'Отзыв клиента', subtitle: 'Porsche Macan 2021' },
  { image: 'https://i.ibb.co/fd7mf7Wx/photo-2025-12-18-11-35-13.jpg', title: 'Отзыв клиента', subtitle: 'Porsche 911 2021' },
  { image: 'https://i.ibb.co/vvwLtkLN/photo-2026-01-14-12-40-43.jpg', title: 'Отзыв клиента', subtitle: 'Audi A6 2019' },
  { image: 'https://i.ibb.co/HLsywrZd/photo-2026-02-09-13-26-28.jpg', title: 'Отзыв клиента', subtitle: 'Range Rover Evoque 2021' },
  { image: 'https://i.ibb.co/1YjHYHNZ/photo-2026-02-09-13-25-39.jpg', title: 'Отзыв клиента', subtitle: 'Mercedes GLE 2021' },
  { image: 'https://i.ibb.co/GvdbPzXd/photo-2025-12-18-11-35-12.jpg', title: 'Отзыв клиента', subtitle: 'BMW M5 2021' },
  { image: 'https://i.ibb.co/d4vcCd7g/photo-2026-02-09-13-25-30.jpg', title: 'Отзыв клиента', subtitle: 'BMW 5 Series 2021' },
  { image: 'https://i.ibb.co/CswKx51q/photo-2026-01-14-12-39-54.jpg', title: 'Отзыв клиента', subtitle: 'BMW X5 2020' },
  { image: 'https://i.ibb.co/RGmGcwf9/photo-2026-02-09-13-24-55.jpg', title: 'Отзыв клиента', subtitle: 'Range Rover Sport 2021' },
  { image: 'https://i.ibb.co/Txbfw3pK/photo-2025-12-18-11-35-13-2.jpg', title: 'Отзыв клиента', subtitle: 'Audi RS6 2020' },
  { image: 'https://i.ibb.co/5hrf3PSP/photo-2026-02-09-13-25-15.jpg', title: 'Отзыв клиента', subtitle: 'Land Rover Discovery 2020' },
  { image: 'https://i.ibb.co/SDn5c072/photo-2026-01-14-12-40-23.jpg', title: 'Отзыв клиента', subtitle: 'Mercedes E-Class 2021' },
  { image: 'https://i.ibb.co/4wW9N8Qn/photo-2026-02-09-13-25-51.jpg', title: 'Отзыв клиента', subtitle: 'BMW X7 2020' },
  { image: 'https://i.ibb.co/zVLvLq0w/photo-2026-02-09-13-24-59.jpg', title: 'Отзыв клиента', subtitle: 'Volkswagen Touareg 2019' },
  { image: 'https://i.ibb.co/HpGcxtjd/photo-2026-02-09-13-26-21.jpg', title: 'Отзыв клиента', subtitle: 'Audi A8 2020' },
];

export function Accessories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);
  const [dragStart, setDragStart] = useState(0);

  // Создаем бесконечный массив для плавной прокрутки
  const extendedAccessories = [...accessories, ...accessories, ...accessories];
  const itemsToShow = 3;

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      if (newIndex >= accessories.length * 2) {
        setTimeout(() => setCurrentIndex(accessories.length), 300);
      }
      return newIndex;
    });
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      if (newIndex < accessories.length) {
        setTimeout(() => setCurrentIndex(accessories.length * 2 - 1), 300);
      }
      return newIndex;
    });
  };

  // Автоплей (каждые 3 секунды)
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  // Клавиатурное управление
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prev();
        setIsAutoPlaying(false);
      } else if (e.key === 'ArrowRight') {
        next();
        setIsAutoPlaying(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <section
      id="reviews-section"
      className="py-16 lg:py-24 bg-gray-50"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-light uppercase tracking-wider mb-2 text-brabus-heading">
            Отзывы наших клиентов
          </h2>
          <p className="text-sm lg:text-base text-gray-600 mb-12">РЕАЛЬНЫЕ ИСТОРИИ УСПЕХА</p>
        </motion.div>

        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden touch-pan-y">
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              animate={{
                x: `calc(-${(currentIndex * 100) / itemsToShow}%)`,
              }}
              transition={{
                duration: 0.7,
                ease: [0.32, 0.72, 0, 1],
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragStart={(e, info) => {
                setDragStart(info.point.x);
                setIsAutoPlaying(false);
              }}
              onDragEnd={(e, info) => {
                const dragDistance = info.point.x - dragStart;
                const swipeThreshold = 50;

                if (Math.abs(dragDistance) > swipeThreshold) {
                  if (dragDistance > 0) {
                    prev();
                  } else {
                    next();
                  }
                }
              }}
            >
              {extendedAccessories.map((item, index) => (
                <div key={index} className="min-w-full md:min-w-[50%] lg:min-w-[33.333%] px-3">
                  <motion.div
                    className="bg-white rounded-lg overflow-hidden shadow-md group cursor-pointer"
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                    }}
                    transition={{
                      duration: 0.3,
                      ease: [0.34, 1.56, 0.64, 1]
                    }}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                      {/* Градиентный оверлей */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-sm font-bold uppercase mb-2 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-600">{item.subtitle}</p>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-xl p-4 rounded-full hover:bg-gray-100 transition-all z-10"
            aria-label="Previous"
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </motion.button>
          <motion.button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-xl p-4 rounded-full hover:bg-gray-100 transition-all z-10"
            aria-label="Next"
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </motion.button>
        </div>

        {/* Индикаторы */}
        <div className="flex justify-center gap-2 mt-8">
          {accessories.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrentIndex(accessories.length + index);
                setIsAutoPlaying(false);
              }}
              className={`h-2 rounded-full transition-all ${
                (currentIndex % accessories.length) === index
                  ? 'bg-gray-800 w-8'
                  : 'bg-gray-300 hover:bg-gray-400 w-2'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
