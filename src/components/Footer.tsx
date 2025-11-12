
import { Motion } from "@/components/ui/Motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-secondary/50 border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
      
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <Motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h4 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                Mutua.made
              </h4>
              <p className="text-muted-foreground max-w-md">
                Turning ideas into elegant digital experiences through creative technology, thoughtful design, and secure development.
              </p>
            </div>
          </Motion>
          
          {/* Quick Links */}
          <Motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <h5 className="font-semibold text-foreground mb-4">Quick Links</h5>
              <ul className="space-y-2">
                {["Home", "About", "Projects", "Skills", "Contact"].map((link) => (
                  <li key={link}>
                    <a 
                      href={`#${link.toLowerCase()}`} 
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Motion>
          
          {/* Social & Contact */}
          <Motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <h5 className="font-semibold text-foreground mb-4">Connect</h5>
              <div className="flex gap-3 mb-4">
                <Motion whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <a 
                    href="https://github.com/SamBudah/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-card hover:bg-primary/20 text-foreground hover:text-primary transition-all border border-border hover:border-primary"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Motion>
                <Motion whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <a 
                    href="https://linkedin.com/in/samsonmaithya" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-card hover:bg-primary/20 text-foreground hover:text-primary transition-all border border-border hover:border-primary"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Motion>
                <Motion whileHover={{ scale: 1.1, y: -2 }} whileTap={{ scale: 0.95 }}>
                  <a 
                    href="mailto:contact@mutuamade.com"
                    className="p-3 rounded-xl bg-card hover:bg-primary/20 text-foreground hover:text-primary transition-all border border-border hover:border-primary"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </Motion>
              </div>
              <p className="text-sm text-muted-foreground">
                Available for freelance and full-time opportunities
              </p>
            </div>
          </Motion>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Mutua.made - Samson Maithya. All rights reserved.
          </p>
          
          <Motion whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <button 
              onClick={scrollToTop}
              className="p-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-glow transition-all"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </Motion>
        </div>
      </div>
    </footer>
  );
}
