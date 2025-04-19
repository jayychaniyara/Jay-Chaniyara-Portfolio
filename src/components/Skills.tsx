import React from "react";
import {
  Code,
  Database,
  Terminal,
  LayoutGrid,
  GitBranch,
  Workflow
} from "lucide-react";

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: <LayoutGrid size={24} />,
    skills: [
      "Angular",
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "Bootstrap",
      "jQuery"
    ]
  },
  {
    title: "Backend",
    icon: <Code size={24} />,
    skills: ["ASP.NET Core", "MVC", "Web API", "Node.js"]
  },
  {
    title: "Database",
    icon: <Database size={24} />,
    skills: ["SQL Server", "MongoDB"]
  },
  {
    title: "Tools",
    icon: <Terminal size={24} />,
    skills: ["Git", "Azure DevOps", "Docker", "RabbitMQ", "Postman"]
  },
  {
    title: "Methodologies",
    icon: <GitBranch size={24} />,
    skills: ["Agile/Scrum", "RESTful APIs", "Unit Testing (xUnit)"]
  },
  {
    title: "Additional",
    icon: <Workflow size={24} />,
    skills: ["Problem Solving", "Debugging", "Team Collaboration"]
  }
];

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="card hover:border-primary/30 group"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both"
              }}
            >
              <div className="flex items-center mb-4 gap-3">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="relative inline-flex items-center justify-center"
                  >
                    <span className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-50 scale-110"></span>
                    <span className="relative px-3 py-1 text-sm rounded-full bg-secondary border border-border hover:border-primary/30 transition-colors">
                      {skill}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
