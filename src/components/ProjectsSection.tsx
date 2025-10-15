import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "BMI Calculator",
    description:
      "A fast and responsive BMI calculator built with React, Vite, and TailwindCSS that instantly displays your health category based on height and weight.",
    image: "/Projects/Project1.png",
    tags: [, "Tailwindcss", "Typescript", "ReactHooks"],
    demoUrl: "https://luisdevv04.github.io/bmi-calculator/",
    githubUrl: "https://github.com/LuisDevv04/bmi-calculator",
  },
  {
    id: 2,
    title: "Hex Code Generator",
    description:
      "A sleek color generator made with React, Vite, and TailwindCSS that creates random colors and lets you copy hex codes instantly.",
    image: "/Projects/Project2.png",
    tags: ["HTML", "CSS", "javascript"],
    demoUrl: "https://luisdevv04.github.io/Hex-code-generator/",
    githubUrl: "https://github.com/LuisDevv04/Hex-code-generator",
  },
  {
    id: 3,
    title: "Weather-app",
    description:
      "A modern React, Vite, and TailwindCSS weather app showing real-time conditions, temperature, and more with a clean, responsive design.",
    image: "/Projects/Project3.png",
    tags: ["RESTful API", "Tailwindcss", "Typescript", "ReactHooks"],
    demoUrl: "https://luisdevv04.github.io/Weather-app/",
    githubUrl: "https://github.com/LuisDevv04/Weather-app",
  },
];
export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here you’ll find a selection of my recent projects built with modern
          web technologies. Each one reflects my growth as a developer and my
          passion for creating clean, functional, and responsive user
          experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary  text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {" "}
                  {project.title}{" "}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}{" "}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/LuisDevv04"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
