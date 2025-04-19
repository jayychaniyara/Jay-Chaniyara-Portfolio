import React from "react";
import { MapPin, Mail, Linkedin } from "lucide-react";
import JayProfile from "../data/JayChaniyara.jpeg";

const About = () => {
  return (
    <section id="about" className="bg-secondary/30">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6 animate-fade-in">
            <p className="text-lg leading-relaxed">
              I'm a results-driven and detail-oriented full-stack developer with
              over 3+ years of experience in building scalable web applications.
              My expertise lies in working with Angular, .NET Core, MVC, Web
              API, and SQL Server.
            </p>

            <p className="text-lg leading-relaxed">
              I excel in debugging, problem-solving, and collaborating with
              cross-functional teams to deliver high-quality software solutions.
              My approach combines technical expertise with a focus on creating
              exceptional user experiences.
            </p>

            <p className="text-lg leading-relaxed">
              Beyond my professional work, I have a background in robotics
              competitions, including participation in Robocon 2017–18 and
              various robotics events. This experience has enhanced my
              problem-solving abilities and collaborative mindset.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-semibold mb-4">
                Contact Information
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-primary" />
                  <span>Vadodara, Gujarat, India</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-primary" />
                  <a
                    href="mailto:chaniyarajaykumar@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    chaniyarajaykumar@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin size={20} className="text-primary" />
                  <a
                    href="https://linkedin.com/in/jayychaniyara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    linkedin.com/in/jayychaniyara
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src={JayProfile} // Use the imported image
                  alt="Jay Chaniyara"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-primary/20 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
