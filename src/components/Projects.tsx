import React, { useState } from "react";
import { Code, ExternalLink, FileCode, Github } from "lucide-react";
import { useGitHubProjects } from "@/hooks/useGitHubProjects";
import { Button } from "@/components/ui/button";

const PROJECTS_PER_PAGE = 6;

const Projects = () => {
  const { data: projects, isLoading, error } = useGitHubProjects();
  const [visibleProjects, setVisibleProjects] = useState(PROJECTS_PER_PAGE);

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + PROJECTS_PER_PAGE);
  };

  const hasMoreProjects = projects ? visibleProjects < projects.length : false;

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin inline-block w-8 h-8 border-2 border-primary border-t-transparent rounded-full" />
          </div>
        )}

        {error && (
          <div className="text-center py-12 text-destructive">
            Failed to load projects. Please try again later.
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects?.slice(0, visibleProjects).map((project) => (
            <div
              key={project.id}
              className="card group relative overflow-hidden flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-md bg-primary/10 text-primary">
                  <FileCode size={24} />
                </div>
                <h3 className="text-xl font-semibold line-clamp-1">
                  {project.name}
                </h3>
              </div>

              <p className="text-foreground/70 mb-4 line-clamp-3">
                {project.description || "No description available"}
              </p>

              {(project.language || project.topics?.length) && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.language && (
                    <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
                      {project.language}
                    </span>
                  )}
                  {project.topics?.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20 backdrop-blur-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-auto flex flex-col gap-2">
                <a
                  href={project.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  View on GitHub <ExternalLink size={14} className="ml-1" />
                </a>

                {project.homepage && (
                  <a
                    href={project.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    <Code size={14} className="mr-1" />
                    Preview
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {hasMoreProjects && (
          <div className="mt-8 text-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={handleShowMore}
              className="gap-2"
            >
              <Github className="h-4 w-4" />
              Show More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
