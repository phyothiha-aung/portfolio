import React from "react";
import { data } from "../data/data.js";
import { motion } from "framer-motion";
import { fadeIn } from "../variants.js";

const Work = () => {
  // projects file
  const project = data;
  //setProject(data);

  return (
    <div name="Work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="pb-5"
        >
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-400">
            Works
          </p>
          <p className="py-6">{"//"} Check out some of my recent work</p>
        </motion.div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/* Gird Item */}
          {project.map((item, index) => (
            <motion.div
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
              className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div "
              variants={fadeIn(index % 2 === 0 ? "right" : "left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              {/* Hover effect for images */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font bold text-white tracking-wider ">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  {/* eslint-disable-next-line */}
                  <a href={item.github} target="_blank">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>
                  <a href={item.demo} target="_blank" rel="noreferrer">
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Demo
                    </button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
