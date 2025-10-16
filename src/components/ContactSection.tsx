import { Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary ">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I’m open to new challenges, feel free to get in touch!
        </p>

        <div className="space-y-6 mb-12 flex flex-col items-center">
          <div className="space-y-8 ">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 justify-center ">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4>Email</h4>
                  <a
                    href="mailto:laldana161@gmail.com"
                    className="text-muted-foreground hover:primary transition-colors"
                  >
                    laldana161@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4>Phone</h4>
                  <a
                    href="tel:+50375046554"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +503 75046554
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10 ">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4>Location</h4>
                  <a
                    href=""
                    className="text-muted-foreground hover:primary transition-colors"
                  >
                    San Salvador, El Salvador
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8 ">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/luis-alberto-cardona-aldana-6122a2240"
                  target="_blank"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
