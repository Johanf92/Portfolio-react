import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaGithub,
  FaLinkedin,
  FaFacebookMessenger,
  FaCodepen,
} from "react-icons/fa";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative py-20 px-6"
    >
      <RevealOnScroll>
        <div className="max-w-5xl w-full mx-auto flex flex-col items-center text-center space-y-10">
          {/* Header */}
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent leading-tight">
            Welcome to Johan’s Portfolio
          </h1>

          <div className="border border-white/10 bg-white/5 hover:bg-white/10 hover:border-yellow-500/40 transition-all p-8 rounded-xl shadow-lg shadow-yellow-500/5 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10">
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl space-y-4">
              <p className="text-yellow-400 text-lg font-medium tracking-wide">
                Crafting modern, responsive, and visually engaging web
                experiences.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                I’m currently in my final year of studying{" "}
                <strong>Front-End Development at Noroff</strong>. I specialize
                in building responsive, user-focused web applications using
                React, TailwindCSS, and modern JavaScript workflows.
                <br />
                <br />I also have a strong eye for design — bringing together{" "}
                <strong>UI/UX principles</strong> with tools like{" "}
                <strong>Figma</strong> and <strong>Adobe XD</strong> to deliver
                polished, intuitive user experiences.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500 to-orange-400 rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-500"></div>
                <img
                  src="/Portfolio-react/img/20240917_171140(1).jpg"
                  alt="Portrait of Johan, front-end developer"
                  className="relative w-56 h-64 object-cover rounded-lg shadow-lg shadow-yellow-500/20 group-hover:shadow-yellow-500/40 transition-all duration-300"
                />
              </div>

              <div className="flex justify-center space-x-6 pt-2">
                <a
                  href="https://github.com/Johanf92"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="text-gray-400 text-3xl hover:text-yellow-500 hover:-translate-y-1 transition-all"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/johanf92"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-gray-400 text-3xl hover:text-yellow-500 hover:-translate-y-1 transition-all"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://m.me/johanf92"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Messenger Link"
                  className="text-gray-400 text-3xl hover:text-yellow-500 hover:-translate-y-1 transition-all"
                >
                  <FaFacebookMessenger />
                </a>

                <a
                  href="https://codepen.io/johanf92"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="CodePen Profile"
                  className="text-gray-400 text-3xl hover:text-yellow-500 hover:-translate-y-1 transition-all"
                >
                  <FaCodepen />
                </a>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex justify-center space-x-4 mt-6">
            <a
              href="#projects"
              className="bg-yellow-500 text-white py-3 px-8 rounded-lg font-medium transition-all hover:-translate-y-0.5 hover:bg-yellow-400 hover:shadow-[0_0_15px_rgba(255,215,0,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-yellow-500/50 text-yellow-500 py-3 px-8 rounded-lg font-medium transition-all hover:-translate-y-0.5 hover:bg-yellow-500/10 hover:shadow-[0_0_15px_rgba(255,215,0,0.2)]"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
