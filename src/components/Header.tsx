
import { useState, useEffect } from "react";
import { Motion } from "@/components/ui/Motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setScrolled(window.scrollY > 20);
      
      // Determine active section
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
    )}>
      <div className="container-custom flex items-center justify-between">
        <Motion 
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#home" className="text-2xl font-bold text-gradient">Portfolio</a>
        </Motion>
        
        <nav>
          <Motion 
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, staggerChildren: 0.1, delayChildren: 0.2 }}
            className="flex items-center gap-8"
          >
            {navItems.map((item, index) => (
              <Motion 
                key={item.name}
                custom={index}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index }}
                className="relative"
              >
                <a 
                  href={item.href} 
                  className={cn(
                    "text-base font-medium transition-colors hover:text-accent",
                    activeSection === item.href.substring(1) ? "text-accent" : "text-foreground"
                  )}
                >
                  {item.name}
                  {activeSection === item.href.substring(1) && (
                    <Motion 
                      layoutId="activeSection"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                    />
                  )}
                </a>
              </Motion>
            ))}
          </Motion>
        </nav>
      </div>
    </header>
  );
}
