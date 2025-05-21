import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io";

import Whatsapp from "./Whatsapp";
import { motion } from "framer-motion";



const Topbar = () => {
  return (
    <div className="bg-gradient-to-r from-[#892b64] via-[#5c4d7d] to-[#2e6f95] text-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <motion.div 
                    className="hidden md:flex items-center space-x-4 bg-slate-300/20 backdrop-blur-md p-2 rounded-full shadow-lg"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
        >
          <a href="https://www.facebook.com/" target="_blank" className="hover:text-gray-300">
            <CiFacebook className="h-10 w-10 text-[#039BE5] transition-transform duration-300 hover:scale-125" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" className="hover:text-gray-300">
            <IoLogoInstagram className="h-10 w-10 text-[#FF6F00] transition-transform duration-300 hover:scale-125" />
          </a>
          <span target="_blank">
            <Whatsapp />
          </span>
        </motion.div>
        <motion.div 
                    className="text-md lg:text-center text-center flex-grow ml-10 text-[#eae2b7]"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
        >
          <span>We ship worldwide - Fast and reliable shipping!</span>
        </motion.div>
        <motion.div 
                    className="text-sm hidden md:block"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
        >
          <a href="tel:+1234567890" className="hover:text-gray-300  gap-4 inline-flex items-center">
          <span role="img" aria-label="support" className="text-xl md:text-2xl">🎧</span>
          <p>+1 (832) 588-4481</p>
          </a>
        </motion.div>
      </div>
    </div>
  );
};
export default Topbar;
