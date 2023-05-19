import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full   bg-[#0a192f] text-gray-300 ">
      <div className="max-w-[1200px] flex justify-between items-center mx-auto px-4 h-[60px]">
        <div className="h-[45px] w-[100px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            style={{ width: "100%", height: "100%" }}
            viewBox="0 0 1000 623"
          >
            <g transform="matrix(1,0,0,1,-0.6060606060606233,0.2522267206477409)">
              <svg
                viewBox="0 0 396 247"
                data-background-color="#ffffff"
                preserveAspectRatio="xMidYMid meet"
                height="623"
                width="1000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="tight-bounds"
                  transform="matrix(1,0,0,1,0.2400000000000091,-0.09999999999999432)"
                >
                  <svg viewBox="0 0 395.52 247.2" height="247.2" width="395.52">
                    <g>
                      <svg></svg>
                    </g>
                    <g>
                      <svg
                        viewBox="0 0 395.52 247.2"
                        height="247.2"
                        width="395.52"
                      >
                        <g transform="matrix(1,0,0,1,75.54432,78.1504603158431)">
                          <svg
                            viewBox="0 0 244.43135999999998 90.89907936831379"
                            height="90.89907936831379"
                            width="244.43135999999998"
                          >
                            <g>
                              <svg
                                viewBox="0 0 244.43135999999998 90.89907936831379"
                                height="90.89907936831379"
                                width="244.43135999999998"
                              >
                                <g>
                                  <svg
                                    viewBox="0 0 244.43135999999998 90.89907936831379"
                                    height="90.89907936831379"
                                    width="244.43135999999998"
                                  >
                                    <g>
                                      <svg
                                        viewBox="0 0 244.43135999999998 90.89907936831379"
                                        height="90.89907936831379"
                                        width="244.43135999999998"
                                      >
                                        <g id="textblocktransform">
                                          <svg
                                            viewBox="0 0 244.43135999999998 90.89907936831379"
                                            height="90.89907936831379"
                                            width="244.43135999999998"
                                            id="textblock"
                                          >
                                            <g>
                                              <svg
                                                viewBox="0 0 244.43135999999998 90.89907936831379"
                                                height="90.89907936831379"
                                                width="244.43135999999998"
                                              >
                                                <g transform="matrix(1,0,0,1,0,0)">
                                                  <svg
                                                    width="244.43135999999998"
                                                    viewBox="2.049999952316284 -36.5 98.14999389648438 36.5"
                                                    height="90.89907936831379"
                                                    data-palette-color="#22d3ee"
                                                  >
                                                    <path
                                                      d="M12.75-32.35L12.75-17.4 17.45-17.4Q18.85-17.4 20.08-17.82 21.3-18.25 22-18.95L22-18.95Q23-19.95 23.7-21.38 24.4-22.8 24.4-24.65L24.4-24.65Q24.4-26.3 23.73-27.88 23.05-29.45 22-30.55L22-30.55Q21.2-31.4 19.95-31.88 18.7-32.35 17.25-32.35L17.25-32.35 12.75-32.35ZM20.05-13.75L20.05-13.75 12.75-13.75 12.75-3.95 17.5-2.9 17.5 0 2.05 0 2.05-2.9 6.25-3.95 6.25-32.05 2.05-33.1 2.05-36 20.1-36Q22.45-36 24.4-35.38 26.35-34.75 27.6-33.6L27.6-33.6Q29.35-32.05 30.38-29.88 31.4-27.7 31.4-25.3L31.4-25.3Q31.4-22.85 30.33-20.33 29.25-17.8 27.5-16.25L27.5-16.25Q26.2-14.9 24.25-14.33 22.3-13.75 20.05-13.75ZM33.45-24.75L33.45-36 64.75-36 64.75-24.75 61.55-24.75 59.95-32.25 52.35-32.25 52.35-4.1 57.65-2.9 57.65 0 40.55 0 40.55-2.9 45.85-4.1 45.85-32.25 38.2-32.25 36.65-24.75 33.45-24.75ZM84.95-2.9L89.05-3.95 86.5-11.7 74.3-11.7 71.7-3.95 75.85-2.9 75.85 0 62.65 0 62.65-2.9 66.75-3.95 78.45-36.5 84.6-36.5 96.2-3.95 100.2-2.9 100.2 0 84.95 0 84.95-2.9ZM80.65-29.9L80.45-29.9 75.55-15.35 85.3-15.35 80.65-29.9Z"
                                                      opacity="1"
                                                      transform="matrix(1,0,0,1,0,0)"
                                                      fill="#22d3ee"
                                                      className="undefined-text-0"
                                                      data-fill-palette-color="primary"
                                                      id="text-0"
                                                    ></path>
                                                  </svg>
                                                </g>
                                              </svg>
                                            </g>
                                          </svg>
                                        </g>
                                      </svg>
                                    </g>
                                  </svg>
                                </g>
                              </svg>
                            </g>
                          </svg>
                        </g>
                        <g>
                          <path
                            d="M0 123.6c0-68.262 55.338-123.6 123.6-123.6 48.033 0 89.667 27.399 110.124 67.421h-4.625c-20.106-37.679-59.808-63.322-105.499-63.322-65.999 0-119.501 53.503-119.501 119.501 0 65.999 53.503 119.501 119.501 119.501 45.691 0 85.393-25.643 105.499-63.322h4.625c-20.458 40.022-62.091 67.421-110.124 67.421-68.262 0-123.6-55.338-123.6-123.6z"
                            fill="#8dbdff"
                            stroke="transparent"
                            data-fill-palette-color="tertiary"
                          ></path>
                        </g>
                      </svg>
                    </g>
                    <defs></defs>
                  </svg>
                  <rect
                    width="395.52"
                    height="247.2"
                    fill="none"
                    stroke="none"
                    visibility="hidden"
                  ></rect>
                </g>
              </svg>
            </g>
          </svg>
        </div>

        {/* menu */}
        <ul className="hidden text-sm sm:flex">
          {["Home", "About", "Skills", "Works", "Contact"].map((navItem) => (
            <Link
              key={navItem}
              activeClass="active"
              to={navItem}
              spy={true}
              smooth={true}
              duration={500}
            >
              <li className="hover:text-cyan-400 duration-400">{navItem}</li>
            </Link>
          ))}
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="sm:hidden z-10">
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
          {["Home", "About", "Skills", "Works", "Contact"].map((navItem) => (
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
    </div>
  );
};

export default Navbar;
