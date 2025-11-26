import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  
  // Simulating the 3D camera rotation/movement seen in the video
  const cameraY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const cameraRotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const cameraScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  return (
    <div ref={containerRef} className="relative h-screen min-h-[800px] w-full overflow-hidden flex flex-col justify-center items-center bg-[#050505]">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="relative z-10 text-center px-4"
      >
        <h1 className="text-[12vw] leading-[0.9] font-heading text-white mix-blend-difference mb-4">
          CHRISTIAN <br /> KREMSER
        </h1>
        <p className="max-w-xl mx-auto text-lg md:text-xl text-gray-300 font-light mt-8">
          Content creator from Vienna <br />
          who is specialised in photo, video, design & coding.
        </p>
      </motion.div>

      {/* Simulated 3D Camera Element - Using a high quality image with transformations */}
      <motion.div 
        style={{ 
          y: cameraY, 
          rotateZ: cameraRotate, 
          scale: cameraScale,
          rotateX: 10,
          rotateY: 20
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] pointer-events-none z-0 opacity-50 md:opacity-80"
      >
         {/* Placeholder for the camera model seen in video */}
         <img 
            src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1000&auto=format&fit=crop" 
            alt="Camera Background" 
            className="w-full h-full object-contain drop-shadow-2xl grayscale contrast-125 brightness-50"
         />
      </motion.div>
    </div>
  );
};