
import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="card space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <a 
                  href="mailto:chaniyarajaykumar@gmail.com"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  chaniyarajaykumar@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">Mobile</h3>
                <a 
                  href="tel:+916352802737"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  +91-6352802737
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 rounded-lg hover:bg-secondary/50 transition-colors">
              <div className="p-3 rounded-full bg-primary/10 text-primary">
                <Linkedin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-medium mb-1">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/jayychaniyara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  linkedin.com/in/jayychaniyara
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
