import React from "react";
import { BookOpen, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="bg-secondary/30">
      <div className="container">
        <h2 className="section-title">Education & Certifications</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <div className="card hover:border-primary/30">
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-md bg-primary/10 text-primary mr-4">
                <BookOpen size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold">
                  B.E. in Information Technology
                </h4>
                <p className="text-foreground/70 mb-2">
                  Vadodara Institute of Engineering
                </p>
                <p className="text-sm text-foreground/60">Graduated 2021</p>
              </div>

              <div className="pt-4">
                <h4 className="text-lg font-medium mb-3">Extracurricular</h4>
                <ul className="space-y-3">
                  <li className="flex">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <div>
                      <p className="font-medium">Robocon 2017–18 Participant</p>
                      <p className="text-sm text-foreground/70">
                        Asia-Pacific Broadcasting Union
                      </p>
                      <p className="text-sm text-foreground/60 mt-1">
                        Worked on autonomous Bluetooth-enabled robots
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="w-1 h-1 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    <div>
                      <p className="font-medium">Robotics Events</p>
                      <p className="text-sm text-foreground/70">
                        PRAKARSH, TECHKSHETRA, FOOTPRINT
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="card hover:border-primary/30">
            <div className="flex items-center mb-6">
              <div className="p-2 rounded-md bg-primary/10 text-primary mr-4">
                <Award size={24} />
              </div>
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>

            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg bg-background/30">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1200px-Microsoft_Azure_Logo.svg.png"
                      alt="Azure"
                      className="w-6 h-6 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">
                      Microsoft Azure Fundamentals (AZ-900)
                    </h4>
                    <p className="text-sm text-foreground/70">Microsoft</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
