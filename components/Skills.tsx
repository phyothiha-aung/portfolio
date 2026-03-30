import { nextSkillsData, skillsData } from "@/assets/data/skills";
import Image from "next/image";

const Skills = () => {
  return (
    <section id="Skills" className="py-17 px-2">
      <div className="app-container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl text-left font-bold text-primary font-exo-2 uppercase">
          Skills
        </h2>
        <div className="mt-8">
          <h3 className="text-primary font-medium text-base sm:text-lg">
            These are the technologies I have worked with
          </h3>

          <div className="w-full grid grid-cols-2 min-[500px]:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 text-center py-5">
            {skillsData.map((skill) => (
              <div key={skill.id} className="">
                <Image
                  className="w-20 rounded-md mx-auto aspect-square object-contain hover:scale-110 duration-500"
                  src={skill.image}
                  alt={`${skill.name} icon`}
                />
                <p className="my-4 text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-primary font-medium text-base sm:text-lg">
            I am currently learning
          </h3>

          <div className="w-full grid grid-cols-2 min-[500px]:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4 text-center py-6">
            {nextSkillsData.map((skill) => (
              <div key={skill.id} className="">
                <Image
                  className="w-20 mx-auto aspect-square object-contain hover:scale-110 duration-500"
                  src={skill.image}
                  alt={`${skill.name} icon`}
                />
                <p className="my-4 text-white">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
