import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-center text-transparent">
            Feautured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-gray-400 mb-4">Project 1</h3>
              <p>
                Description -- Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Illum, repudiandae!
              </p>
              <div>
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-yellow-400 hover:text-yellow-300 tranition-colors my-4"
                >
                  {" "}
                  View Project:
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-gray-400 mb-4">Project 1</h3>
              <p>
                Description -- Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Illum, repudiandae!
              </p>
              <div>
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-yellow-400 hover:text-yellow-300 tranition-colors my-4"
                >
                  {" "}
                  View Project:
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-gray-400 mb-4">Project 1</h3>
              <p>
                Description -- Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Illum, repudiandae!
              </p>
              <div>
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-yellow-400 hover:text-yellow-300 tranition-colors my-4"
                >
                  {" "}
                  View Project:
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-gray-400 mb-4">Project 1</h3>
              <p>
                Description -- Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Illum, repudiandae!
              </p>
              <div>
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-yellow-400 hover:text-yellow-300 tranition-colors my-4"
                >
                  {" "}
                  View Project:
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-gray-400 mb-4">Project 1</h3>
              <p>
                Description -- Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Illum, repudiandae!
              </p>
              <div>
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-yellow-400 hover:text-yellow-300 tranition-colors my-4"
                >
                  {" "}
                  View Project:
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
              <h3 className="text-gray-400 mb-4">Project 1</h3>
              <p>
                Description -- Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Illum, repudiandae!
              </p>
              <div>
                {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20
                        hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-yellow-400 hover:text-yellow-300 tranition-colors my-4"
                >
                  {" "}
                  View Project:
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
