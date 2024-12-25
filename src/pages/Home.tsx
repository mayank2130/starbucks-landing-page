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
          className="mt-14 flex flex-row items-center"
        >
          <div className="relative rounded-3xl my-6 px-6 py-4 overflow-hidden">
            <div className="relative ml-24">
              <p className="mb-5 text-4xl font-semibold">STARBUCKS IS...</p>
              <h1 className="text-[140px] font-anton leading-tight text-gray-100">
                HOT OR COLD <br /> IT IS THE BEST
              </h1>
              <div className="flex justify-start items-center flex-row gap-6 mt-8">
                <button className="bg-[#013220] text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all">
                  Order Now
                </button>
                <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all">
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
          className="flex flex-row ml-28 gap-10 mt-3"
        >
          <div className="flex h-36 w-36 bg-gradient-to-b from-green-800 to-green-600 rounded-2xl justify-center  ">
            <img src={cup1} alt="cups" className="object-contain" />
          </div>
          <div className="flex h-36 w-36 bg-gradient-to-b from-green-800 to-green-600 rounded-2xl justify-center  ">
            <img src={cup2} alt="cups" className="object-contain" />
          </div>
          <div className="flex h-36 w-36 bg-gradient-to-b from-green-800 to-green-600 rounded-2xl justify-center  ">
            <img src={cup3} alt="cups" className="object-contain" />
          </div>
          <div className="flex h-36 w-36 bg-gradient-to-b from-green-800 to-green-600 rounded-2xl justify-center  ">
            <img src={cup4} alt="cups" className="object-contain" />
          </div>
          <div className="flex h-36 w-36 bg-gradient-to-b from-green-800 to-green-600 rounded-2xl justify-center  ">
            <img src={cup5} alt="cups" className="object-contain" />
          </div>
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
