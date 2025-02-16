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
      className="min-h-screen flex items-center justify-center relative px-6 pt-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl w-full mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Left Side: Text */}
          <div className="text-center md:text-left">
            <h1 className="text-center text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent leading-tight">
              Hello! Welcome to Johan's WebDev Solutions
            </h1>

            {/* Flex container for paragraph, image, and icons */}
            <div className="flex flex-col md:flex-row items-center border border-yellow-500/20 py-6 px-6 md:items-start space-y-6 md:space-y-0 md:space-x-8">
              {/* Paragraph */}
              <p className="text-gray-400 text-lg max-w-lg mt-3">
                I'm currently in my final year of studying front-end development
                at Noroff. I specialize in creating responsive and visually
                appealing websites using HTML, CSS, and JavaScript, with
                frameworks like Bootstrap and Tailwind to streamline the
                process. I also have experience working with design tools such
                as Figma and Adobe, ensuring that my designs are not only
                functional but aesthetically pleasing. In addition, I have a
                solid understanding of CMS platforms and other web development
                tools. Feel free to check out my GitHub for more details on my
                projects!
              </p>

              {/* Right Side: Image and Icons */}
              <div className="flex flex-col items-center">
                <img
                  src="/img/20240917_171140(1).jpg"
                  alt="Johan's Profile"
                  className="w-60 h-70 rounded-lg object-cover shadow-lg"
                />

                {/* Social Icons - Now centered inside the bordered container */}
                <div className="flex justify-center space-x-6 pt-4 w-full">
                  <a
                    href="https://github.com/johanf92"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="text-gray-400 text-3xl hover:text-yellow-500 transition" />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourlinkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookMessenger className="text-gray-400 text-3xl hover:text-yellow-500 transition" />
                  </a>
                  <a
                    href="https://facebook.com/in/yourlinkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className="text-gray-400 text-3xl hover:text-yellow-500 transition" />
                  </a>

                  <a
                    href="https://codepen.io/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaCodepen className="text-gray-400 text-3xl hover:text-yellow-500 transition" />
                  </a>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <a
                href="#projects"
                className="bg-yellow-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-lg"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-yellow-500/50 text-yellow-500 py-3 px-6 rounded font-medium transition duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:bg-yellow-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
