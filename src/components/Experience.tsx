
import React from 'react';
import { Calendar, Briefcase } from 'lucide-react';

type Job = {
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
};

const experiences: Job[] = [
  {
    title: "Software Engineer",
    company: "Civica India",
    period: "Oct 2024 – Present",
    responsibilities: [
      "Developed scalable EDU web app features using Angular & .NET Core.",
      "Solved production issues and enhanced user experience.",
      "Implemented complex business logic for educational software solutions.",
      "Collaborated with cross-functional teams to meet project deadlines."
    ]
  },
  {
    title: "Junior Software Engineer",
    company: "Civica India",
    period: "Oct 2022 – Sep 2024",
    responsibilities: [
      "Built full-stack modules with Angular & Web API.",
      "Involved in code reviews and performance improvements.",
      "Developed and maintained database stored procedures in SQL Server.",
      "Participated in agile development processes and sprint planning."
    ]
  },
  {
    title: "Graduate Trainee",
    company: "Civica India",
    period: "Jul 2022 – Oct 2022",
    responsibilities: [
      "Completed technical training in .NET, Angular, and SQL.",
      "Assisted in development of smaller features for existing projects.",
      "Learned company coding standards and development workflows."
    ]
  },
  {
    title: "Intern",
    company: "Rishabh Software",
    period: "Jan 2022 – Jul 2022",
    responsibilities: [
      "Developed full-stack projects using Angular, Node.js, MongoDB.",
      "Created responsive user interfaces with HTML, CSS, and Bootstrap.",
      "Worked on RESTful API development and integration.",
      "Participated in daily stand-up meetings and sprint reviews."
    ]
  }
];

const Experience = () => {
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
              {/* Timeline connector for desktop */}
              {index < experiences.length - 1 && (
                <div className="absolute left-4 top-14 w-[2px] h-[calc(100%-2rem)] bg-border hidden md:block"></div>
              )}
              
              <div className="md:grid md:grid-cols-12 md:gap-8">
                {/* Timeline dot for desktop */}
                <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center hidden md:flex">
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                
                <div className="md:col-span-3 mb-4 md:mb-0 relative">
                  {/* Date and company */}
                  <div className="flex items-center mb-2 text-primary md:justify-end">
                    <Calendar size={16} className="mr-2 md:hidden" />
                    <span className="text-sm font-medium">{job.period}</span>
                  </div>
                  
                  <div className="text-lg font-medium text-foreground/90 md:text-right">
                    {job.company}
                  </div>
                </div>
                
                <div className="md:col-span-9">
                  {/* Job card */}
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
