import { Briefcase, Code, User } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Self-Taught Web Developer
            </h3>
            <p className="text-muted-foreground">
              with over 3 years of experience in the coaching industry i come
              from a background in training and communication, which has
              strengthened my ability to learn quickly, collaborate effectively,
              and explain complex ideas clearly.
            </p>

            <p className="text-muted-foreground">
              Passionate about creating clean, responsive, and user-friendly web
              applications using React and Typescript.Always eager to learn,
              improve, and bring creative ideas into functional, real-world
              products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/Documents/CV_Luis_Cardona_.pdf"
                download="CV_Luis_Cardona.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend Development</h4>
                  <p className="text-muted-foreground">
                    Developing modern web applications with React and
                    TypeScript, focusing on performance, scalability, and
                    user-centered design.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Frontend design</h4>
                  <p className="text-muted-foreground">
                    Applying design principles to create responsive, accessible,
                    and visually appealing interfaces using Tailwind CSS and
                    modern UI libraries.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Agile Mindset</h4>
                  <p className="text-muted-foreground">
                    Bringing organization, adaptability, and effective
                    communication from my coaching background into collaborative
                    development projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
