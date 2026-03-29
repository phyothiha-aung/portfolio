import Image from "next/image";
import Link from "next/link";
import PROFILE from "@/assets/images/profile.webp";
import { BiDownload } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const calculateAge = (
  birthYear: number,
  birthMonth: number,
  birthDay: number = 1,
) => {
  const today = new Date();
  const birthDate = new Date(birthYear, birthMonth - 1, birthDay);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const About = () => {
  const age = calculateAge(1999, 12, 6);

  return (
    <section
      id="About"
      className="w-full flex items-center py-17 min-h-dvh h-fit md:min-h-fit"
    >
      <div className="app-container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12 xl:gap-20">
          <div className="relative group w-[300px] max-w-[400px] flex-1">
            <div className="border-2 border-primary/20 rounded-3xl aspect-square md:aspect-4/5 p-4">
              <Image
                src={PROFILE}
                alt="Phyo Thiha Aung"
                priority
                className="z-10 w-full h-full object-cover object-top rounded-2xl shadow-2xl transition-all duration-500"
              />
            </div>
          </div>

          <div className="flex-1 text-white/80 space-y-6 px-1 xl:px-5">
            <h2 className="text-3xl md:text-5xl font-bold text-primary font-exo-2 uppercase">
              About Me
            </h2>

            <div className="space-y-4 text-base lg:text-lg leading-relaxed">
              <p>
                My name is{" "}
                <span className="text-white font-semibold">
                  Phyo Thiha Aung
                </span>
                , a {age}-year-old frontend developer from Myanmar. With over{" "}
                <span className="text-primary font-medium">
                  three years of professional experience
                </span>
                , I bridge the gap between complex logic and elegant design.
              </p>

              <p>
                My expertise lies in{" "}
                <span className="text-white">
                  TypeScript, React, and React Native
                </span>
                . I thrive on building scalable, high-performance applications
                that prioritize clean code and maintainable architecture.
              </p>

              <p>
                I don&apos;t just write code. I build digital experiences that
                are intuitive, reliable, and polished from the ground up.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4 items-center">
              <Link
                href="/phyo-thiha-aung-resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="download resume"
                className="flex items-center gap-2 bg-primary/30 hover:bg-primary/40 text-primary px-4 py-2 rounded-md font-medium transition"
              >
                Resume <BiDownload size={18} />
              </Link>
              <Link
                href="https://github.com/phyothiha-aung"
                title="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 aspect-square flex items-center justify-center text-white"
              >
                <FaGithub size={24} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/phyo-thiha-aung-8ab728273"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 aspect-square flex items-center justify-center text-white"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                href="mailto:phyothihaaung.dev@gmail.com"
                title="Email"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 aspect-square flex items-center justify-center text-white"
              >
                <IoMail size={26} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
