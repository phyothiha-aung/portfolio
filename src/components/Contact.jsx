import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Contact = () => {
  return (
    <div
      name="Contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/c393e4c9-5900-458d-812c-e1901eceeb4f"
        className="flex flex-col max-w-[600px] w-full"
      >
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="pb-4"
        >
          <p className="text-4xl font-bold inline border-b-4 border-cyan-400 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">{"//"} Submit the form below</p>
        </motion.div>
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="flex flex-col border border-gray-300 pt-6 px-3 rounded-xl text-gray-400"
        >
          <input
            className="bg-transparent p-2 outline-none border-b border-gray-400 placeholder:text-gray-600 focus:border-cyan-300"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-transparent outline-none border-b border-gray-400 placeholder:text-gray-600 focus:border-cyan-300"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-transparent p-2 outline-none border-b border-gray-400 placeholder:text-gray-600 focus:border-cyan-300"
            name="message"
            rows="6"
            placeholder="Message"
          ></textarea>
          <div className="flex justify-between items-center">
            <button className="text-white border-2 hover:bg-cyan-400 hover:border-cyan-300 px-4 py-3 my-8 flex items-center">
              Let's Collaborate
            </button>
            <div className="flex gap-4 md:gap-5 justify-center items-center">
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://www.linkedin.com/in/phyo-thiha-aung-8ab728273/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size={20} className="hover:text-cyan-400" />
              </a>
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="https://github.com/phyothiha-aung"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size={20} className="hover:text-cyan-400" />
              </a>
              <a
                className="flex justify-between items-center w-full text-gray-300"
                href="mailto:phyothiha050@gmail.com"
              >
                <HiOutlineMail size={20} className="hover:text-cyan-400" />
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                className="flex justify-between items-center w-full text-gray-300"
                href="https://drive.google.com/file/d/11eizAnXQKiAStDa6q6TrQnbXKp7Mfk3q/view?usp=share_link"
              >
                <BsFillPersonLinesFill
                  size={20}
                  className="hover:text-cyan-400"
                />
              </a>
            </div>
          </div>
        </motion.div>
      </form>
    </div>
  );
};

export default Contact;
