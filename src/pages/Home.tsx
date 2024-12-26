import Navbar from "../components/Navbar";
import car from "../assets/normalcup.png";
import cup1 from "../assets/machiatto.png";
import cup2 from "../assets/capp.png";
import cup3 from "../assets/white.png";
import cup4 from "../assets/icecold.png";
import cup5 from "../assets/newshake.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-[#00A86B] h-screen flex justify-between a">
      <div className="flex flex-col">
        <Navbar />

        <motion.div
          initial={{ x: -200, opacity: 0, scale: 0.4 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="mt-4 md:mt-14 flex flex-row items-center"
        >
          <div className="relative rounded-3xl my-2 md:my-6 px-2 md:px-6 py-2 md:py-4 overflow-hidden">
            <div className="relative ml-4 md:ml-24">
              <p className="mb-2 md:mb-5 text-2xl md:text-4xl font-semibold">STARBUCKS IS...</p>
              <h1 className="text-4xl sm:text-6xl md:text-[90px] lg:text-[120px] font-anton leading-tight text-gray-100">
                HOT OR COLD <br /> IT IS THE BEST
              </h1>
              <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center gap-4 md:gap-6 mt-4 md:mt-8">
                <button className="w-full sm:w-auto bg-[#013220] text-white px-4 md:px-8 py-2 md:py-3 rounded-lg hover:bg-opacity-90 transition-all">
                  Order Now
                </button>
                <button className="w-full sm:w-auto bg-white text-black px-4 md:px-8 py-2 md:py-3 rounded-lg hover:bg-opacity-90 transition-all">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-row flex-wrap justify-center md:justify-start md:ml-28 gap-4 md:gap-10 mt-3 px-4 md:px-0"
        >
          {[cup1, cup2, cup3, cup4, cup5].map((cup, index) => (
            <div key={index} className="flex h-24 w-24 md:h-36 md:w-36 bg-gradient-to-b from-green-800 to-green-600 rounded-2xl justify-center">
              <img src={cup} alt={`cup${index + 1}`} className="object-contain p-2" />
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute top-32 right-52 w-full h-[75%] z-40 pr-6 flex justify-end">
        <motion.img
          initial={{ y: 200, opacity: 0, scale: 0.4 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: 0.1 }}
          src={car}
          alt="Coffee Cup"
          className="object-contain max-w-full a transform"
        />
      </div>
      <div className="bg-[#184336] w-[340px] rounded-l-[100px] flex items-center justify-center">
        <div className="flex rotate-180">
          <motion.h1
            initial={{ y: -400 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.5,
              duration: 1.2,
            }}
            className="text-transparent text-[100px] font-bold [writing-mode:vertical-rl] [-webkit-text-stroke:2px_white]"
          >
            ICE COFFEE
          </motion.h1>
          <motion.h1
            initial={{ y: 400 }}
            animate={{ y: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.4,
              duration: 1.2,
            }}
            className=" -ml-10 mr-20 mt-28 text-white text-[100px] font-bold [writing-mode:vertical-rl]"
          >
            ICE COFFEE
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
