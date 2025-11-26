import React from 'react';
import { Instagram, Linkedin, Youtube, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-24 pb-8 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Brand/Logo */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold font-heading mb-6">CK</h3>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Sitemap</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#" className="hover:text-gray-400 transition-colors">Home</a></li>
              <li><a href="#travel" className="hover:text-gray-400 transition-colors">Travel</a></li>
              <li><a href="#photography" className="hover:text-gray-400 transition-colors">Photography</a></li>
              <li><a href="#video" className="hover:text-gray-400 transition-colors">Video</a></li>
              <li><a href="#about" className="hover:text-gray-400 transition-colors">About</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Social</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li>
                <a href="#" className="flex items-center space-x-2 hover:text-gray-400 transition-colors">
                  <Instagram size={16} /> <span>Instagram</span>
                </a>
              </li>
               <li>
                <a href="#" className="flex items-center space-x-2 hover:text-gray-400 transition-colors">
                  <Linkedin size={16} /> <span>LinkedIn</span>
                </a>
              </li>
               <li>
                <a href="#" className="flex items-center space-x-2 hover:text-gray-400 transition-colors">
                  <Youtube size={16} /> <span>YouTube</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <a href="mailto:hello@christiankremser.com" className="hover:text-gray-400 transition-colors">hello@christiankremser.com</a>
              </li>
              <li>+43 (677) 677 050 16</li>
              <li className="pt-4 text-gray-500">
                Privacy Policy<br/>Imprint
              </li>
            </ul>
          </div>
        </div>

        {/* Big Text Footer */}
        <div className="border-t border-white/10 pt-12 text-center">
          <h1 className="text-[12vw] leading-[0.8] font-heading text-white uppercase opacity-80 select-none">
            ChristianKremser
          </h1>
          <p className="mt-8 text-xs text-gray-600">
            © 2024 Christian Kremser. This website was recreated by AI.
          </p>
        </div>
      </div>
    </footer>
  );
};