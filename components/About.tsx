import Image from "next/image";
import PROFILE from "@/assets/images/profile.webp";

const calculateAge = (birthYear: number, birthMonth: number) => {
  const today = new Date();
  let age = today.getFullYear() - birthYear;

  if (today.getMonth() + 1 < birthMonth) {
    age--;
  }

  return age;
};

const About = () => {
  return (
    <section
      id="about"
      className="min-h-dvh w-full flex flex-col items-center justify-center pt-17"
    >
      <div className="app-container w-full grow flex items-center">
        <div className="flex justify-center items-stretch gap-5 w-full">
          <div className="flex-1 flex justify-center ">
            <div className="w-4/5 sm:w-3/5 aspect-5/6">
              <Image
                src={PROFILE}
                alt="Phyo Thiha Aung"
                className="w-full h-full object-cover object-top rounded-3xl"
              />
            </div>
          </div>

          <div className="flex-1 text-white/80 flex flex-col justify-start items-start ">
            <h2 className="text-primary text-xl sm:text-2xl lg:text-3xl mt-5 font-semibold mb-8">
              About Me
            </h2>

            <div className="w-full sm:w-4/5 space-y-2.5 leading-[1.5em] tracking-wide ">
              <p>
                My name is <span className="text-white">Phyo Thiha Aung.</span>{" "}
              </p>
              <p>
                I'm {calculateAge(1999, 12)} year old frontend developer from
                Myanmar with <br />
                3+ years of experience.
              </p>
              <p>
                I specialize in JavaScript and modern frontend ecosystems,
                mainly work with TypeScript, React, and React Native to build
                scalable, high-performance web and mobile applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
