import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "Javascript",
    "HTML",
    "CSS",
    "TailwindCSS",
    "Bootstrap",
    "Docker",
    "Cypress",
    "Jest",
    "REST API",
    "API",
    "SASS",
    "PHP",
  ];

  const designSkills = [
    "UX",
    "UI",
    "Prototyping",
    "Adobe XD",
    "Figma",
    "Wireframing",
    "Wordpress",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-center text-transparent">
            About me:
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all ">
            <p className="text-gray-300 py-4 px-4">
              I have honed my skills in HTML, CSS, and JavaScript, working
              extensively with frameworks like React, TailwindCSS, and
              Bootstrap. My experience goes beyond coding—I have a solid
              understanding of UX/UI principles and enjoy bringing designs to
              life using tools like Figma and Adobe XD. Whether it’s optimizing
              performance, ensuring accessibility, or refining aesthetics, I
              love turning ideas into seamless digital experiences.
            </p>

            <div className="grid grid-cols-1 text-center md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend:</h3>
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
                <h3 className="text-xl font-bold mb-4">Design:</h3>
                <div className="flex flex-wrap gap-2">
                  {designSkills.map((tech, key) => (
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
              <h3 className="text-xl text-center font-bold mb-4"> Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>High School Diploma</strong> – Specialization in
                  Studies and Economics
                </li>
                <li>
                  <strong>BI Norwegian Business School</strong> – One-year
                  program in Business Economics
                </li>
                <li>
                  <strong>
                    University of South-Eastern Norway (Bakkenteigen)
                  </strong>{" "}
                  – One-year program in History
                </li>
                <li>
                  <strong>Noroff School of Technology and Digital Media</strong>{" "}
                  – Front-End Development (Online, 2 years)
                </li>
                <li>
                  <strong>Udemy Courses:</strong>
                  <ul className="list-disc list-inside text-gray-300 space-y-1">
                    <li>
                      <a
                        href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/learn/lecture/27512464?start=0#overview"
                        className="text-yellow-500 hover:underline"
                      >
                        HTML & CSS
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648369?start=0#overview"
                        className="text-yellow-500 hover:underline"
                      >
                        JavaScript
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25595350?start=0#overview"
                        className="text-yellow-500 hover:underline"
                      >
                        React (In Progress)
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  Various courses in Design, WordPress, WordPress Headless CMS,
                  and PHP from LinkedIn Learning
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl text-center font-bold mb-4">
                {" "}
                Work Experience
              </h3>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h4> Sales Manager, Elkjøp</h4>
                  <p>
                    Led a team in sales, improving customer experience and
                    optimizing store performance.
                  </p>
                </div>
                <div>
                  <h4> Support Specialist, Elkjøp</h4>
                  <p>
                    Assisted customers with technical issues, troubleshooting,
                    and product guidance.
                  </p>
                </div>
                <div>
                  <h4> Student, Noroff</h4>
                  <p>
                    Completed various front-end projects, gaining hands-on
                    experience with React, TailwindCSS, and UX/UI design
                    principles.
                  </p>
                </div>
                <div>
                  <h4> Freelance Projects</h4>
                  <p>
                    Worked on independent projects, including web applications
                    and design prototypes.
                  </p>
                </div>
                <div>
                  <p>
                    📌 Check out my projects:{" "}
                    <a
                      href="#projects"
                      className="text-yellow-500 hover:underline"
                    >
                      #projects
                    </a>
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
