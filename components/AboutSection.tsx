import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative bg-black text-white py-24 px-6 md:px-12 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <h2 className="text-6xl md:text-8xl font-heading leading-tight mb-8">
              TRANSFORM <br /> VISIONS <br /> INTO REALITY
            </h2>
            
            <div className="relative aspect-[4/3] w-full max-w-lg overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1000&auto=format&fit=crop" 
                alt="Creator with Camera" 
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <p className="text-2xl md:text-4xl font-heading leading-tight uppercase">
              I AM A VIENNA-BASED CREATIVE SPECIALIZING IN PHOTOGRAPHY, VIDEO, DEVELOPMENT, DESIGN AND SOCIAL MEDIA. 
              WITH A PASSION FOR STORYTELLING, I BRING A UNIQUE PERSPECTIVE TO EACH PROJECT.
            </p>
            
            <p className="text-gray-400 text-lg max-w-xl">
              From capturing moments to crafting digital experiences, let's turn your visions into reality.
            </p>

            <button className="group flex items-center space-x-2 border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-widest text-sm font-bold">
              <span>More About Me</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};