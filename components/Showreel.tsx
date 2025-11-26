import React from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

export const Showreel: React.FC = () => {
  return (
    <section id="video" className="py-24 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-6xl md:text-9xl font-heading mb-4 tracking-tight">SHOWREEL</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover a collection of my best video work, created with passion for great clients over the years.
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-5xl mx-auto aspect-video bg-gray-900 rounded-2xl overflow-hidden group cursor-pointer"
        >
          {/* Background Video Placeholder */}
          <img 
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2000&auto=format&fit=crop" 
            alt="Showreel Cover" 
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 fill-white" />
            </div>
          </div>
          
          <div className="absolute bottom-8 left-0 right-0 text-center">
             <span className="text-xl font-heading tracking-[0.2em]">PLAY</span>
          </div>
        </motion.div>
        
        <div className="mt-12">
            <button className="border border-white/20 bg-white/5 backdrop-blur px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-bold">
              More Videos
            </button>
        </div>
      </div>
    </section>
  );
};