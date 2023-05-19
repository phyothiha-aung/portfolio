import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div name="Home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 h-full flex flex-col justify-center">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col justify-center"
        >
          <p className="text-cyan-400">Hi, my name is</p>
          <h1 className="text-4xl sm:text-6xl md:text-5xl font-bold text-[#ccd6f6]">
            Phyo Thiha Aung
          </h1>
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold text-[#8892b0]">
            I'm a{" "}
            <TypeAnimation
              cursor={true}
              sequence={["Web Developer", 1500, "Mobile Developer", 1500]}
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            I’m a web developer specializing in Javascript. I build responsive
            websites and mobile applications with React and React Native.
          </p>
          <div>
            <Link to="Work" smooth={true} duration={500}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-cyan-400 hover:border-cyan-300">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
