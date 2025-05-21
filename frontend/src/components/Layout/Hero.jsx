import { motion } from "framer-motion";
import heroImg from "../../assets/heroImg.jpg";
import CubeAnimation from "./CubeAnimation";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="SimoShopExpress"
        className="w-full h-[400px] md:h-[600px] lg:h-[750px] lg:object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center lg:justify-end justify-end">
      <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl"
        >
          <motion.h1
            className="lg:text-5xl md:text-6xl font-extrabold leading-tight mb-6 mr-6"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            Welcome to<br/> <span className="text-blue-500">SimoShopExpress</span>
          </motion.h1>
          <p className="lg:text-lg text-gray-300 mb-6 hidden lg:block">
            Your ultimate online store for trendy fashion, gadgets, and more. Shop with confidence and express yourself!
          </p>
         { /*<motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-600 hover:bg-blue-700 transition text-white px-4 py-3 rounded-full shadow-lg"
          >
            Shop Now 🛒
          </motion.button>*/}
          <Link to="/collections/all?gender=Men">
               <CubeAnimation />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


