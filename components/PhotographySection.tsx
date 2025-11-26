import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  "https://picsum.photos/seed/fashion/600/800",
  "https://picsum.photos/seed/city/800/600",
  "https://picsum.photos/seed/portrait/600/600",
  "https://picsum.photos/seed/nature/700/500",
  "https://picsum.photos/seed/urban/500/700",
];

export const PhotographySection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [300, -300]);
  const y3 = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="photography" className="bg-[#E8E0D5] text-black py-32 overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-[15vw] leading-none font-heading opacity-10 absolute top-20 left-0 right-0 pointer-events-none select-none"
        >
          PHOTO
        </motion.h2>

        <div className="text-center mb-24 relative">
          <h3 className="text-6xl md:text-8xl font-heading mb-4">PHOTOGRAPHY</h3>
          <p className="max-w-2xl mx-auto text-gray-600 font-medium">
            Moments fleeting, memories everlasting: where photography freezes time.
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[800px]">
          {/* Column 1 */}
          <motion.div style={{ y: y1 }} className="flex flex-col gap-8 pt-20">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500">
               <img src={images[0]} alt="Gallery 1" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500">
               <img src={images[2]} alt="Gallery 2" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          {/* Column 2 */}
          <motion.div style={{ y: y2 }} className="flex flex-col gap-8">
             <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500">
               <img src={images[1]} alt="Gallery 3" className="w-full h-full object-cover" />
            </div>
             <div className="bg-black text-white p-8 rounded-2xl flex items-center justify-center text-center aspect-square shadow-2xl">
                <div>
                   <h4 className="text-4xl font-heading mb-4">Capturing<br/>The Soul</h4>
                   <p className="text-sm text-gray-400">Every shot tells a story.</p>
                </div>
            </div>
          </motion.div>

          {/* Column 3 */}
          <motion.div style={{ y: y3 }} className="flex flex-col gap-8 pt-40">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500">
               <img src={images[3]} alt="Gallery 4" className="w-full h-full object-cover" />
            </div>
             <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500">
               <img src={images[4]} alt="Gallery 5" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>

        <div className="text-center mt-24">
           <button className="bg-black text-white px-10 py-4 rounded-full text-sm font-bold tracking-widest hover:bg-gray-800 transition-colors uppercase">
              More Photos
           </button>
        </div>
      </div>
    </section>
  );
};