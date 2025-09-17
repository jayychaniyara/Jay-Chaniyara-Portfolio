// components/Hero.tsx
import React, { useEffect, useRef } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { useTypingEffect } from "@/hooks/useTypingEffect";

const Hero = () => {
  const firstNameRef = useRef<HTMLSpanElement>(null);
  const lastNameRef = useRef<HTMLSpanElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const typedText = useTypingEffect(
    "Results-driven and detail-oriented full-stack developer with 3.5+ years of experience in building scalable web applications using Angular, React, .NET Core, and SQL Server.",
    25
  );
  useEffect(() => {
    const elements = [
      { ref: firstNameRef, delay: 100 },
      { ref: lastNameRef, delay: 300 },
      { ref: titleRef, delay: 500 },
      { ref: descRef, delay: 700 },
      { ref: ctaRef, delay: 900 }
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.remove("opacity-0");
          ref.current?.classList.remove("translate-y-8");
        }, delay);
      }
    });
  }, []);

  return (
    <section
      id="top"
      className="min-h-screen flex flex-col justify-center relative pt-20 pb-16"
    >
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 relative">
            <span
              ref={firstNameRef}
              className="transition-all duration-700 opacity-0 translate-y-8 inline-block relative group"
            >
              <span className="text-primary relative z-10 group-hover:drop-shadow-glow">
                Jay
              </span>
              <span className="absolute inset-0 bg-primary/20 blur-xl opacity-50 rounded-lg z-0 transition-all duration-700 group-hover:opacity-70"></span>
            </span>{" "}
            <span
              ref={lastNameRef}
              className="transition-all duration-700 opacity-0 translate-y-8 inline-block relative group"
            >
              <span className="relative z-10 text-foreground group-hover:drop-shadow-glow">
                Chaniyara
              </span>
              <span className="absolute inset-0 bg-accent/20 blur-xl opacity-50 rounded-lg z-0 transition-all duration-700 group-hover:opacity-70"></span>
            </span>
          </h1>

          <div
            ref={titleRef}
            className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-8 transition-all duration-700 opacity-0 translate-y-8"
          >
            Full-Stack Software Developer
          </div>

          <p
            ref={descRef}
            className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto transition-all duration-700 opacity-0 translate-y-8"
          >
            {typedText}
            <span className="text-foreground/50 animate-pulse">|</span>
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col md:flex-row items-center justify-center gap-4 transition-all duration-700 opacity-0 translate-y-8"
          >
            <a
              href="#contact"
              className="px-8 py-3 rounded-md bg-primary text-white font-medium hover:bg-primary/80 transition-colors w-full md:w-auto"
            >
              Contact Me
            </a>

            <div className="flex items-center gap-4 mt-6 md:mt-0">
              <a
                href="https://github.com/jayychaniyara"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/jayychaniyara"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:chaniyarajaykumar@gmail.com"
                className="p-2 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-subtle">
        <a href="#about" aria-label="Scroll down">
          <ArrowDown className="text-primary" size={32} />
        </a>
      </div>

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent pointer-events-none -z-10"></div>
    </section>
  );
};

export default Hero;
