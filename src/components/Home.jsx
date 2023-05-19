import React, { useEffect, useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  const [animation, setAnimation] = useState("text-animation");

  useEffect(() => {
    const ani = setTimeout(() => setAnimation("hover-animation"), 3000);
    return () => clearTimeout(ani);
  }, []);
  return (
    <div name="Home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-1 min-[450px]:px-4 md:px-8 h-full flex flex-row min-[450px]:gap-3 md:gap-5">
        <div className="flex flex-col justify-center items-center md:px-8">
          <div className="h-7 w-7 rounded-full bg-cyan-400" />
          <div className="h-80 w-1 bg-cyan-400" />
        </div>
        <div className="flex flex-col justify-center">
          <div className="flex flex-col justify-center">
            <p className="text-cyan-400">Hi, my name is</p>
            <h1 className="max-[470px]:text-4xl text-5xl sm:text-6xl font-bold text-[#ccd6f6]">
              {"Phyo Thiha Aung".split("").map((c, i) => (
                <span
                  key={c + i}
                  className={`${animation}`}
                  style={{
                    animationDelay:
                      animation === "text-animation" ? `${i / 10}s` : "",
                  }}
                >
                  {c}
                </span>
              ))}
            </h1>
            <h2 className="text-2xl sm:text-4xl md:text-5xl min-[873]:text-6xl min-[1005px]:text-7xl font-bold text-[#8892b0] my-3">
              I'm a{" "}
              <TypeAnimation
                cursor={true}
                sequence={["Web Developer", 1500, "Mobile Developer", 1500]}
                speed={50}
                repeat={Infinity}
              />
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px] tracking-normal md:tracking-widest fadeInBackWards">
              Frontend Developer | Javascript | React{" "}
              <span className="hidden sm:inline">| React Native</span>
            </p>
            <div>
              <Link to="Works" smooth={true} duration={500}>
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center border-cyan-300 hover:bg-cyan-400 hover:border-cyan-300 fadeInBackWards">
                  View Work
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3 " />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
