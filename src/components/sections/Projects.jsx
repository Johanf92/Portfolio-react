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
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Auction Site",
                image: "/Portfolio-react/img/Auction1.png",
                description:
                  "The objective of this project is to utilize the skills learned over the past three semesters to create a fully functional auction website. This website will allow users to add items for auction and bid on items listed by other users.",
                technologies: [
                  "HTML",
                  "Bootstrap",
                  "CSS-Framework",
                  "Kanban",
                  "Gantt",
                  "Adobe XD",
                  "GitHub Projects",
                  "SASS/SCSS",
                  "Netlify",
                  "API",
                ],
                liveLink: "https://melodious-baklava-0d07b1.netlify.app/",
                githubLink: "https://github.com/Johanf92/Semester-CA-2",
              },
              {
                title: "Social Media",
                image: "/Portfolio-react/img/DevBook.png",
                description:
                  "The primary aim of this assignment is to get used to writing unit tests and E2E tests, in this case for the login and logout functionality of a premade project. Additionally, it provides an opportunity to enhance familiarity with essential development tools such as Git for version control, npm packages for dependency management, and various testing frameworks and tools.",
                technologies: [
                  "Jest",
                  "Cypress",
                  "Prettier",
                  "Husky",
                  "Babel",
                  "HTML",
                  "JavaScript",
                  "SASS/SCSS",
                  "Netlify",
                  "API",
                  "Bootstrap",
                ],
                liveLink: "https://helpful-dasik-852356.netlify.app/",
                githubLink: "https://github.com/Johanf92/social-media-client",
              },
              {
                title: "Portfolio 1",
                image: "/Portfolio-react/img/Portfolio1.png",
                description:
                  "This website showcases my work, skills, and projects, built with just HTML and CSS. It's a simple yet effective representation of my passion for web development and design.",
                technologies: ["HTML", "CSS", "Basic", "MediaQueries"],
                liveLink: "https://relaxed-chebakia-d7a028.netlify.app/",
                githubLink: "https://github.com/Johanf92/social-media-client",
              },
              {
                title: "First Exam - Food Blog",
                image: "/Portfolio-react/img/FoodBlog1.png",
                description:
                  "Purpose of the project is to create a blog page using WordPress as a headless CMS with WordPress REST-API and skills in HTML, CSS, and JavaScript.",
                technologies: [
                  "WordPress",
                  "REST-API",
                  "HTML",
                  "CSS",
                  "MediaQueries",
                ],
                liveLink: "https://lucky-alpaca-b951d6.netlify.app/",
                githubLink: "https://github.com/Johanf92/Eksamen-BLOG",
              },
              {
                title: "Museum Project",
                image: "/Portfolio-react/img/Museum.png",
                description:
                  "Step into the world of history and art with our Museum Project! This webpage is designed specifically for school classes, demonstrating how to create a museum website using only HTML and CSS from scratch.",
                technologies: ["HTML", "CSS", "MediaQueries"],
                liveLink: "https://radiant-froyo-eaed38.netlify.app/",
                githubLink:
                  "https://github.com/Johanf92/Semester-Project-Johan/",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-yellow-500/30 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition flex flex-col h-full"
              >
                <h3 className="text-gray-400 mb-4">{project.title}</h3>

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />

                <p className="flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <a
                    href={project.liveLink}
                    className="text-yellow-400 hover:text-yellow-300 transition-colors block text-center my-4"
                  >
                    View Project
                  </a>
                  <a
                    href={project.githubLink}
                    className="block text-center bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
