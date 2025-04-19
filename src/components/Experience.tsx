import React, { useEffect, useState } from "react";
import { Calendar, Briefcase } from "lucide-react";
import experienceData from "../data/experience.json"; // adjust path as needed

type Job = {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
};

const Experience = () => {
  const [experiences, setExperiences] = useState<Job[]>([]);

  useEffect(() => {
    setExperiences(experienceData);
  }, []);

  return (
    <section id="experience" className="bg-secondary/30">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="space-y-12">
          {experiences.map((job, index) => (
            <div
              key={`${job.title}-${job.company}`}
              className="relative pl-8 md:pl-0"
            >
              {index < experiences.length - 1 && (
                <div className="absolute left-4 top-14 w-[2px] h-[calc(100%-2rem)] bg-border hidden md:block"></div>
              )}

              <div className="md:grid md:grid-cols-12 md:gap-8">
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hidden md:flex">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>

                <div className="md:col-span-3 mb-4 md:mb-0 relative">
                  <div className="flex items-center mb-2 text-primary md:justify-end">
                    <Calendar size={16} className="mr-2 md:hidden" />
                    <span className="text-sm font-medium">{job.period}</span>
                  </div>
                  <div className="text-lg font-medium text-foreground/90 md:text-right">
                    {job.company}
                  </div>
                </div>

                <div className="md:col-span-9">
                  <div className="card bg-secondary hover:border-primary/30">
                    <h3 className="text-xl font-semibold mb-3 flex items-center">
                      <Briefcase size={20} className="mr-2 text-primary" />
                      {job.title}
                    </h3>

                    <ul className="space-y-2 text-foreground/80">
                      {job.responsibilities.map((responsibility, i) => (
                        <li key={i} className="flex items-start">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <span>{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
