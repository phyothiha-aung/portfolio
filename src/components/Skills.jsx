import React from "react";
import { skillsData } from "../data/data";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <div name="Skills" className="w-full h-screen bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-cyan-400 ">
            Skills
          </p>
          <p className="py-4">
            {"//"} These are the technologies I've worked with
          </p>
        </motion.div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img
                className="w-20 mx-auto"
                src={skill.image}
                alt={`${skill.name} icon`}
              />
              <p className="my-4 uppercase">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
