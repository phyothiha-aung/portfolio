import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <p className="logo text-cyan-400 font-bold">Phyo Thiha Aung</p>
      </div>

      {/* menu */}
      <ul className="hidden text-sm md:flex">
        {["Home", "About", "Skills", "Work", "Contact"].map((navItem) => (
          <Link key={navItem} to={navItem} smooth={true} duration={500}>
            <li className="hover:text-cyan-200 duration-400">{navItem}</li>
          </Link>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars size={22} /> : <FaTimes size={22} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center md:hidden"
        }
      >
        {["Home", "About", "Skills", "Work", "Contact"].map((navItem) => (
          <li key={navItem} className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to={navItem}
              smooth={true}
              duration={500}
            >
              {navItem}
            </Link>
          </li>
        ))}
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/phyo-thiha-aung-8ab728273/"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin <FaLinkedin size={28} />
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/phyothiha-aung"
              target="_blank"
              rel="noreferrer"
            >
              Github <FaGithub size={28} />
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:phyothiha050@gmail.com"
            >
              Email <HiOutlineMail size={28} />
            </a>
          </li>
          <li className="w-[160px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://docs.google.com/document/d/1g-mvuM7OmpWRCJGFYLURURWAnN96OZ4J7kqJO_9-kR8/edit?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={28} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
