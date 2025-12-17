import Image from "next/image";
import Link from "next/link";
import PROFILE from "@/assets/images/profile.webp";
import contact from "@/assets/data/contact";

const calculateAge = (
  birthYear: number,
  birthMonth: number,
  birthDay: number = 1
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
      id="about"
      className="min-h-screen w-full flex items-center py-20 bg-neutral-950"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="relative group w-full max-w-[400px] aspect-square md:aspect-4/5 flex-1">
            <div className="border-2 border-primary/20 rounded-3xl p-4 w-full h-full">
              <Image
                src={PROFILE}
                alt="Phyo Thiha Aung"
                priority
                className="z-10 w-full h-full object-cover object-top rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>

          <div className="flex-1 text-white/80 space-y-6">
            <div className="space-y-2">
              <h2 className="text-primary text-sm font-mono tracking-widest uppercase">
                Introduction
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold text-white">
                About Me
              </h3>
            </div>

            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                I am{" "}
                <span className="text-white font-semibold">
                  Phyo Thiha Aung
                </span>
                , a {age}-year-old frontend developer based in Myanmar. With
                over{" "}
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
                I don’t just write code—I build digital experiences that are
                intuitive, reliable, and polished from the ground up.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {/* <Link
                href={contact[0].href}
                title="Download Resume"
                className="flex items-center gap-2 text-sm px-3 rounded-md text-primary hover:text-white bg-secondary "
              >
                <span>Download Resume</span>
                <Image
                  src={contact[0].icon}
                  alt={contact[0].name}
                  width={20}
                  height={20}
                  className="aspect-square h-full object-contain"
                />
              </Link> */}
              {contact.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  title={item.name}
                  className="w-10 aspect-square flex items-center justify-center"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={20}
                    height={20}
                    className="w-full h-full object-cover"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
