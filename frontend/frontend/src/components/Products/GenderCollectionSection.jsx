import { Link } from "react-router-dom";
import mensCollectionImage from "../../assets/mencollection.jpg";
import womensCollectionImage from "../../assets/womancollection.jpg";
import backgroundimagecollection from "../../assets/18.jpg";
import { motion } from "framer-motion";



const GenderCollectionSection = () => {
  return (
    <section className="py-16 px-4 lg:px-0 relative w-full  overflow-hidden">

      <div className="absolute  inset-0 w-full h-full bg-cover bg-center z-0 hidden lg:block">
        <img src={backgroundimagecollection}/>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row gap-8">
        {/* Women's Collection */}
        <motion.div 
                     className="relative flex-1"
                     initial={{ opacity: 0, x: -100 }}
                     transition={{ duration: 1 }}
                     whileInView={{ opacity: 1, x: 0 }}
          >
          <img
            src={womensCollectionImage}
            alt="Women's Collection"
            className="w-full h-[700px] object-cover"
          />
          <motion.div 
                      className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4 rounded-lg"
                      initial={{ opacity: 0, x: -100 }}
                     transition={{ duration: 2 }}
                     whileInView={{ opacity: 1, x: 0 }}
              >
            <h2 className="text-2xl font-bold text-[#3a0ca3] mb-3">
              Women's Collection
            </h2>
            <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  transition={{ duration: 2.5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-gray-900 underline"
            >
                 <Link
                      to="/collections/all?gender=Women"
                      className="text-gray-900 underline"
                  >
                    Shop Now
                 </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        {/* Men's Collection */}
        <motion.div 
                     className="relative flex-1"
                     initial={{ opacity: 0, x: 100 }}
                     transition={{ duration: 1 }}
                     whileInView={{ opacity: 1, x: 0 }}
          >
          <img
            src={mensCollectionImage}
            alt="Men's Collection"
            className="w-full h-[700px] object-cover"
          />
             <motion.div 
                      className="absolute bottom-8 right-8 bg-white bg-opacity-90 p-4 rounded-lg"
                      initial={{ opacity: 0, x: 100 }}
                     transition={{ duration: 2 }}
                     whileInView={{ opacity: 1, x: 0 }}
              >
                   <h2 className="text-2xl font-bold text-[#3a0ca3] mb-3">
                        Men's Collection
                   </h2>
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 2.5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-gray-900 underline"
                >
                   <Link
                      to="/collections/all?gender=Men"
                      className="text-gray-900 underline"
                    >
                       Shop Now
                   </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default GenderCollectionSection;
