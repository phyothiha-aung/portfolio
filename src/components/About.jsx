import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div name="About" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="sm:text-right pb-8 pl-4"
          >
            <p className="text-4xl font-bold inline border-b-4 border-cyan-400">
              About
            </p>
          </motion.div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold">
            <motion.p
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              Hi. I'm <span className="text-4xl">Phyo Thiha Aung</span>, nice to
              meet you. Please take a look around.
            </motion.p>
          </div>
          <div>
            <motion.p
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              I am a skilled web developer with a specialization in JavaScript,
              with expertise in React, React Native, and Redux. I possess a deep
              understanding of modern web development frameworks and enjoy
              tackling complex coding challenges to deliver top-quality
              projects.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
