import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);

  const resumeDownloadLink =
    "https://drive.google.com/uc?export=download&id=1kuMgCZ5n9qlFfu_1EOo3H40AkQPKZTZO";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      let currentActive = "";

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentActive = section.getAttribute("id") || "";
        }
      });

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.1), transparent 70%)"
          }}
        />
      </div>

      <div className="container flex justify-between items-center h-16 md:h-20">
        <a
          href="#top"
          className="text-xl md:text-2xl font-bold text-foreground"
        >
          <span className="text-primary">Jay</span> Chaniyara
        </a>

        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link ${
                  activeSection === link.href.substring(1) ? "active" : ""
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={resumeDownloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/80 transition-colors flex items-center gap-2"
            >
              <Download size={16} />
              Resume
            </a>
          </nav>
        )}

        {isMobile && (
          <div className="flex items-center gap-2">
            <a
              href={resumeDownloadLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-md bg-primary text-primary-foreground hover:bg-primary/80 transition-colors flex items-center gap-1 text-sm"
            >
              <Download size={14} />
              Resume
            </a>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className="md:hidden flex items-center p-2 text-foreground"
                  aria-label="Toggle menu"
                >
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </SheetTrigger>
              <SheetContent
                side="top"
                className="w-full h-screen bg-background/95 backdrop-blur-sm pt-20"
              >
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={handleLinkClick}
                      className={`text-lg py-2 border-b border-border px-4 ${
                        activeSection === link.href.substring(1)
                          ? "text-primary"
                          : "text-foreground/80"
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
