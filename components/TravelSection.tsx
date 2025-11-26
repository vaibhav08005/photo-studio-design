import React from 'react';
import { motion } from 'framer-motion';

const travelImages = [
  { src: "https://picsum.photos/seed/tajmahal/600/400", title: "INDIA" },
  { src: "https://picsum.photos/seed/dubai/600/400", title: "UAE" },
  { src: "https://picsum.photos/seed/desert/600/400", title: "MOROCCO" },
  { src: "https://picsum.photos/seed/cappadocia/600/400", title: "TURKEY" },
  { src: "https://picsum.photos/seed/iceland/600/400", title: "ICELAND" },
  { src: "https://picsum.photos/seed/bali/600/400", title: "INDONESIA" },
];

export const TravelSection: React.FC = () => {
  return (
    <section id="travel" className="bg-[#9BB8C2] py-24 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-sm font-bold tracking-[0.3em] uppercase mb-4 block"
          >
            Never stop exploring
          </motion.span>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-8xl font-heading text-black uppercase leading-tight"
          >
            Travel Around <br/> The World
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {travelImages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer shadow-lg"
            >
              <img 
                src={item.src} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-3xl font-heading text-white tracking-widest opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
           <button className="bg-black text-white px-10 py-4 rounded-full text-sm font-bold tracking-widest hover:bg-gray-800 transition-colors uppercase">
              More About Travel
           </button>
        </div>
      </div>
    </section>
  );
};