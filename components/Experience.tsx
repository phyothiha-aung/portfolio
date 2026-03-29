const Experience = () => {
  return (
    <section id="Experience" className="py-17 px-2">
      <div className="app-container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl text-left font-bold text-primary font-exo-2 uppercase">
          Experience
        </h2>

        <div className="relative w-full mt-8">
          <div className="w-0.5 h-[calc(100%-0.8rem)] bg-primary/80 absolute left-3 md:left-1/2 md:-translate-x-1/2 bottom-0" />

          <div className="relative flex flex-col md:flex-row justify-start md:justify-center gap-1 md:gap-16">
            <div className="absolute bg-primary w-5 aspect-square rounded-full left-[0.15625rem] md:left-1/2 md:-translate-x-1/2 top-3" />
            <div className="flex-1">
              <p className="bg-secondary w-fit ml-8 md:ml-auto text-base text-white px-5 py-2 rounded-2xl font-mono">
                2023 June - current
              </p>
            </div>
            <div className="flex-1">
              <div className="ml-8 md:ml-0">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary py-1.5">
                  React / React Native Developer
                </h3>
                <div className="bg-white/10 mt-3 p-5 rounded-md">
                  <h4 className="text-white font-semibold">
                    Myanmar Software Integrated Solutions Co., Ltd
                  </h4>
                  <ul className="text-white/70 list-disc pl-5 mt-2 space-y-1">
                    <li>
                      Develop and maintain web and mobile applications using
                      React and React Native
                    </li>
                    <li>Work with REST APIs, and complex business logic</li>
                    <li>Optimize app performance and UI responsiveness</li>
                    <li>Deploy production-ready mobile apps (Android/iOS)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row-reverse justify-start md:justify-center gap-1 md:gap-16 mt-10">
            <div className="absolute bg-primary w-5 aspect-square rounded-full left-[0.15625rem] md:left-1/2 md:-translate-x-1/2 top-3" />

            <div className="flex-1">
              <p className="bg-secondary w-fit ml-8 md:ml-0 text-base text-white px-5 py-2 rounded-2xl font-mono">
                Sep 2022 - Nov 2022
              </p>
            </div>

            <div className="flex-1">
              <div className="ml-8">
                <h3 className="text-lg md:text-xl lg:text-2xl text-left md:text-right font-semibold text-primary py-1.5">
                  Frontend Developer
                </h3>
                <div className="bg-white/10 mt-3 p-5 rounded-md">
                  <h4 className="text-white font-semibold">
                    Startup Singapore (Internship)
                  </h4>
                  <ul className="text-white/70 list-disc pl-5 mt-2 space-y-1">
                    <li>Learnt React Native</li>
                    <li>Participated in developing School Management app</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row justify-start md:justify-center gap-1 md:gap-16 mt-10">
            <div className="absolute bg-primary w-5 aspect-square rounded-full left-[0.15625rem] md:left-1/2 md:-translate-x-1/2 top-3" />
            <div className="flex-1">
              <p className="bg-secondary w-fit ml-8 md:ml-auto text-base text-white px-5 py-2 rounded-2xl font-mono">
                Dec 2021 - Sep 2022
              </p>
            </div>
            <div className="flex-1">
              <div className="ml-8 md:ml-0">
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-primary py-1.5">
                  Customer Success Specialist
                </h3>
                <div className="bg-white/10 mt-3 p-5 rounded-md">
                  <h4 className="text-white font-semibold">ZADA Myanmar</h4>
                  <ul className="text-white/70 list-disc pl-5 mt-2 space-y-1">
                    <li>
                      Guiding users through the sensitive COVIDPass verification
                      process.
                    </li>
                    <li>
                      Translated technical concepts into easy-to-understand
                      instructions for non-technical users.
                    </li>
                    <li>
                      Managed high-volume inquiries with clarity and patience to
                      maintain user trust and satisfaction.
                    </li>
                    <li>
                      Acted as a user advocate by translating common
                      frustrations into actionable feedback for the product
                      team.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
