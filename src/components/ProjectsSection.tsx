import { Description } from "@radix-ui/react-toast";

const projects = [
  {
    id: 1,
    title: "BMI Calculator",
    description:
      "A fast and responsive BMI calculator built with React, Vite, and TailwindCSS that instantly displays your health category based on height and weight.",
    image: "/projects/project1.png",
    tags: [, "Tailwindcss", "Typescript", "ReactHooks"],
    demoUrl: "https://luisdevv04.github.io/bmi-calculator/",
    githubUrl: "https://github.com/LuisDevv04/bmi-calculator",
  },
  {
    id: 2,
    title: "Hex Code Generator",
    description:
      "A sleek color generator made with React, Vite, and TailwindCSS that creates random colors and lets you copy hex codes instantly.",
    image: "/projects/project2.png",
    tags: ["HTML", "CSS", "javascript"],
    demoUrl: "https://luisdevv04.github.io/Hex-code-generator/",
    githubUrl: "https://github.com/LuisDevv04/Hex-code-generator",
  },
  {
    id: 3,
    title: "Weather-app",
    description:
      "A modern React, Vite, and TailwindCSS weather app showing real-time conditions, temperature, and more with a clean, responsive design.",
    image: "/projects/project3.png",
    tags: ["RESTful API", "Tailwindcss", "Typescript", "ReactHooks"],
    demoUrl: "https://luisdevv04.github.io/Weather-app/",
    githubUrl: "https://github.com/LuisDevv04/Weather-app",
  },
];
export default function ProjectsSection() {
  return (
    <section>
      <div></div>
    </section>
  );
}
