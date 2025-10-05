import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Exam HoliDaze",
      image: "/Portfolio-react/img/Holidaze.png",
      alt: "Screenshot of the HoliDaze accommodation booking app interface",
      description:
        "Holidaze is my final frontend exam project at Noroff, built using React, Vite, and TailwindCSS. It’s a modern accommodation booking application where users can explore venues, make bookings, and manage their profiles, while venue managers can create and handle their own venues and bookings through an admin dashboard.",
      technologies: [
        "React",
        "Vite",
        "TailwindCSS",
        "JavaScript",
        "API Integration",
        "GitHub Pages",
        "Figma",
        "Gantt",
        "Kanban",
        "Responsive Design",
      ],
      liveLink: "https://johanf92.github.io/Project-Exam-2/",
      githubLink: "https://github.com/Johanf92/Project-Exam-2",
    },
    {
      title: "Auction Site",
      image: "/Portfolio-react/img/Auction1.png",
      alt: "Screenshot of the Auction Site web app showing listings and bids",
      description:
        "A fully functional auction website where users can add items for auction and bid on items listed by others. Built using HTML, CSS (Bootstrap), and JavaScript with API integration. Focused on responsive design and user experience.",
      technologies: [
        "HTML",
        "Bootstrap",
        "CSS Framework",
        "JavaScript",
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
      alt: "Screenshot of the DevBook social media application feed",
      description:
        "A JavaScript Frameworks course assignment focused on using React for a social media app. Includes login/logout functionality, REST API integration, and testing with Jest and Cypress to ensure reliability and performance.",
      technologies: [
        "React",
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
      alt: "Screenshot of a personal portfolio built with HTML and CSS",
      description:
        "This was my first portfolio, built using only HTML and CSS. It’s a simple yet effective representation of my design sense and my early approach to responsive web layout and clean structure.",
      technologies: ["HTML", "CSS", "Basic", "Media Queries"],
      liveLink: "https://relaxed-chebakia-d7a028.netlify.app/",
      githubLink: "https://github.com/Johanf92/social-media-client",
    },
    {
      title: "First Exam - Food Blog",
      image: "/Portfolio-react/img/FoodBlog1.png",
      alt: "Screenshot of the Food Blog website using WordPress API",
      description:
        "A blog page built using WordPress as a headless CMS via the WordPress REST API. Demonstrates skills in working with APIs, fetching data dynamically, and structuring layouts with HTML, CSS, and JavaScript.",
      technologies: [
        "WordPress",
        "REST API",
        "HTML",
        "CSS",
        "Media Queries",
        "JavaScript",
      ],
      liveLink: "https://lucky-alpaca-b951d6.netlify.app/",
      githubLink: "https://github.com/Johanf92/Eksamen-BLOG",
    },
    {
      title: "Museum Project",
      image: "/Portfolio-react/img/Museum.png",
      alt: "Screenshot of the Museum website home page for educational use",
      description:
        "A museum website built from scratch with HTML and CSS, designed for an educational audience. This project demonstrates my foundational front-end skills, focusing on layout, structure, and accessibility.",
      technologies: ["HTML", "CSS", "Media Queries"],
      liveLink: "https://radiant-froyo-eaed38.netlify.app/",
      githubLink: "https://github.com/Johanf92/Semester-Project-Johan/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-center text-transparent">
            Featured Projects
          </h2>

          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
            A collection of my featured frontend development projects from my
            studies and personal work. Each project demonstrates a different set
            of technologies and approaches, showing my growth as a developer.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <article
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-2 hover:bg-white/5 hover:border-yellow-500/50 transition-all flex flex-col h-full"
              >
                <h3 className="text-lg font-semibold text-gray-400 mb-4 text-center">
                  {project.title}
                </h3>

                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full aspect-video object-cover rounded-lg mb-4 shadow-lg shadow-yellow-500/10"
                />

                <p className="text-gray-300 text-sm flex-grow leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-yellow-500/10 text-yellow-400 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open live site for ${project.title}`}
                    className="text-gray-400 hover:text-gray-300 transition-colors block text-center my-4"
                  >
                    View Live Project
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open GitHub repository for ${project.title}`}
                    className="block text-center bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition"
                  >
                    View on GitHub
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
