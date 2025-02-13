import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "HTML",
    "CSS",
    "Adobe-XD & Figma",
    "TailwindCSS",
    "Bootstrap",
    "docker",
    "cypress",
  ];

  const backendSkills = ["Node.js", "Git"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-center text-transparent">
            About me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all ">
            <p className="text-gray-300 mb-6">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              ullam laudantium voluptatum nisi. Iusto, amet?
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                            hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                            hover:shadow-[0_2px_8px_rgba(59, 130, 2246, 0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B.S in computer Science</strong> - XYZ university
                  (YeaR 123)
                </li>
                <li>
                  Relevant Coursework: Data Stucture, Web Development, cloud
                  computing...
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> Work Experience</h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4> Software Engineer at ABC corp (year 123 - year 345)</h4>
                  <p>
                    {" "}
                    Developed and maintained microservoces for cloud-based
                    applications.
                  </p>
                </div>

                <div>
                  <h4> Intern at DEF Startups (year 123 - year 345)</h4>
                  <p>
                    Assisted in building front-end components and integration
                    REST APIs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
