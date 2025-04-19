import React, { useEffect, useState } from "react";
import { BookOpen, Award, ExternalLink } from "lucide-react";
import educationData from "../data/education.json";

interface EducationType {
  degree: string;
  institution: string;
  year: string;
  extracurriculars?: {
    title: string;
    organization: string;
    description: string;
  }[];
}

interface CertificationType {
  title: string;
  issuer: string;
  logo: string;
  certificateLink?: string;
}

const Education: React.FC = () => {
  const [data, setData] = useState<{
    education: EducationType[];
    certifications: CertificationType[];
  }>({
    education: [],
    certifications: []
  });

  const [visibleCerts, setVisibleCerts] = useState(3); // show 3 initially

  useEffect(() => {
    setData(educationData);
  }, []);

  const handleLoadMore = () => {
    setVisibleCerts((prev) => prev + 3);
  };

  return (
    <section id="education" className="bg-secondary/30">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Section */}
          {data.education.map((edu, index) => (
            <div key={index} className="card hover:border-primary/30">
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-md bg-primary/10 text-primary mr-4">
                  <BookOpen size={24} />
                </div>
                <h3 className="text-2xl font-semibold">Education</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold">{edu.degree}</h4>
                  <p className="text-foreground/70 mb-2">{edu.institution}</p>
                  <p className="text-sm text-foreground/60">{edu.year}</p>
                </div>

                {edu.extracurriculars?.length > 0 && (
                  <div className="pt-4">
                    <h4 className="text-lg font-medium mb-3">
                      Extracurricular
                    </h4>
                    <ul className="space-y-3">
                      {edu.extracurriculars.map((item, i) => (
                        <li key={i} className="flex">
                          <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          <div>
                            <p className="font-medium">{item.title}</p>
                            <p className="text-sm text-foreground/70">
                              {item.organization}
                            </p>
                            <p className="text-sm text-foreground/60 mt-1">
                              {item.description}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Single Certification Card */}
          {data.certifications.length > 0 && (
            <div className="card hover:border-primary/30">
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-md bg-primary/10 text-primary mr-4">
                  <Award size={24} />
                </div>
                <h3 className="text-2xl font-semibold">Certifications</h3>
              </div>

              <div className="space-y-4">
                {data.certifications
                  .slice(0, visibleCerts)
                  .map((cert, index) => (
                    <div
                      key={index}
                      className="p-4 border border-border rounded-lg bg-background/30 cursor-pointer"
                      onClick={() => {
                        if (cert.certificateLink) {
                          window.open(cert.certificateLink, "_blank");
                        }
                      }}
                    >
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                          <img
                            src={cert.logo}
                            alt={cert.title}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                        <div>
                          <div className="flex items-center">
                            <h4 className="text-lg font-medium">
                              {cert.title}
                            </h4>
                            {cert.certificateLink && (
                              <a
                                href={cert.certificateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 text-primary"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ExternalLink size={16} />
                              </a>
                            )}
                          </div>
                          <p className="text-sm text-foreground/70">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                {/* Load More Button */}
                {visibleCerts < data.certifications.length && (
                  <div className="text-center pt-2">
                    <button
                      onClick={handleLoadMore}
                      className="text-sm text-primary hover:underline"
                    >
                      Load More
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Education;
