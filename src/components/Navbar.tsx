import Logo from "../assets/starbuckslogo.png";
import Button from "./shared/Button";

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.div
      initial={{ y: -200, opacity: 0, scale: 0.5 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0, delay: 0.1 }}
      className="bg-ternary rounded-3xl px-6 a ml-24 mt-5 flex justify-between align-middle"
    >
      <img src={Logo} className="h-14 my-auto bg-white rounded-full"></img>
      <div className="my-auto hidden md:flex justify-center align-middle ">
        <Button factor={1} text="Coffee" />
        <Button factor={1} text="Discover" />
        <Button factor={1} text="About Us" />
        <Button factor={1} text="Find Me" />
      </div>
    </motion.div>
  );
};

export default Navbar;
