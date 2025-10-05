import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
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
    "WordPress",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-center text-transparent">
            About Me
          </h2>

          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            I’m a passionate front-end developer focused on creating seamless,
            responsive, and user-friendly web experiences. With a foundation in
            design and modern frameworks, I enjoy bridging the gap between
            aesthetics and functionality.
          </p>

          {/* Main About Card */}
          <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-2 hover:bg-white/5 hover:border-yellow-500/50 transition-all mb-10 shadow-lg shadow-yellow-500/5">
            <p className="text-gray-300 mb-6 leading-relaxed">
              I have honed my skills in HTML, CSS, and JavaScript, working
              extensively with frameworks like React, TailwindCSS, and
              Bootstrap. My experience goes beyond coding—I have a solid
              understanding of UX/UI principles and enjoy bringing designs to
              life using tools like Figma and Adobe XD. Whether it’s optimizing
              performance, ensuring accessibility, or refining aesthetics, I
              love turning ideas into seamless digital experiences.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Frontend Skills */}
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:bg-white/5 hover:border-yellow-500/30 transition-all">
                <h3 className="text-xl font-bold mb-4 text-yellow-400 text-center">
                  Frontend
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-yellow-500/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Design Skills */}
              <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:bg-white/5 hover:border-yellow-500/30 transition-all">
                <h3 className="text-xl font-bold mb-4 text-yellow-400 text-center">
                  Design
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {designSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-yellow-500/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Education & Work Experience */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education Card */}
            <article className="p-6 rounded-xl border border-white/10 hover:-translate-y-2 hover:bg-white/5 hover:border-yellow-500/50 transition-all shadow-lg shadow-yellow-500/5">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 text-center">
                Education
              </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm leading-relaxed">
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
                  <ul className="list-disc list-inside text-gray-400 pl-4 space-y-1">
                    <li>
                      <a
                        href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/"
                        className="text-yellow-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        HTML & CSS
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udemy.com/course/the-complete-javascript-course/"
                        className="text-yellow-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        JavaScript
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
                        className="text-yellow-500 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        React (In Progress)
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  Courses in Design, WordPress Headless CMS, and PHP from
                  LinkedIn Learning
                </li>
              </ul>
            </article>

            {/* Work Experience Card */}
            <article className="p-6 rounded-xl border border-white/10 hover:-translate-y-2 hover:bg-white/5 hover:border-yellow-500/50 transition-all shadow-lg shadow-yellow-500/5">
              <h3 className="text-xl font-bold mb-4 text-yellow-400 text-center">
                Work Experience
              </h3>
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <div>
                  <h4 className="font-semibold text-yellow-300">
                    Support & Customer Service, Domene.no
                  </h4>
                  <p>
                    Assisted customers with domain management, technical
                    support, and hosting solutions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-300">
                    Sales Manager, Elkjøp
                  </h4>
                  <p>
                    Led a team in sales, improving customer experience and
                    optimizing store performance.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-300">
                    Support Specialist, Elkjøp
                  </h4>
                  <p>
                    Assisted customers with technical issues, troubleshooting,
                    and product guidance.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-300">
                    Student, Noroff
                  </h4>
                  <p>
                    Completed various front-end projects, gaining hands-on
                    experience with React, TailwindCSS, and UX/UI design
                    principles.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-yellow-300">
                    Freelance Projects
                  </h4>
                  <p>
                    Worked on independent web projects and design prototypes for
                    clients and personal growth.
                  </p>
                </div>
                <p className="pt-2">
                  📌 Check out my{" "}
                  <a
                    href="#projects"
                    className="text-yellow-500 hover:underline"
                  >
                    featured projects
                  </a>
                  .
                </p>
              </div>
            </article>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
