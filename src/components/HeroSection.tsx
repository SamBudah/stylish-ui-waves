
import { Motion } from "@/components/ui/Motion";
import { RevealText } from "@/components/ui/reveal-text";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Github, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Motion
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <Motion
          animate={{ 
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Motion
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-6"
          >
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <p className="text-primary font-medium text-lg">Hello there, I'm</p>
            </Motion>
            
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Samson Maithya
              </h1>
            </Motion>
            
            <div className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
              <RevealText 
                text="I turn ideas into elegant digital experiences"
                delay={0.8}
                className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%] animate-[gradient_8s_ease_infinite]"
              />
            </div>
            
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.7 }}
            >
              <p className="text-muted-foreground text-lg md:text-xl max-w-lg">
                Creative technologist specializing in data analysis, UI/UX design, software development, and cybersecurity.
              </p>
            </Motion>
            
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 0.5 }}
              className="flex gap-4 mt-4"
            >
              <Motion whileHover={{ scale: 1.05, boxShadow: "var(--shadow-glow)" }} whileTap={{ scale: 0.98 }}>
                <a 
                  href="https://github.com/SamBudah/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg shadow-lg hover:shadow-accent transition-all duration-300 flex items-center gap-2"
                >
                  <Github className="h-5 w-5" />
                  View Projects
                </a>
              </Motion>
              <Motion whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <a 
                  href="#contact" 
                  className="px-8 py-4 bg-secondary text-foreground font-semibold rounded-lg border-2 border-border hover:border-primary transition-all duration-300 flex items-center gap-2"
                >
                  <Mail className="h-5 w-5" />
                  Hire Me
                </a>
              </Motion>
            </Motion>
          </Motion>
          
          <Motion
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-3xl mx-auto max-w-md">
              {/* Main animated circle */}
              <Motion
                animate={{ 
                  rotate: 360,
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl"
              />
              
              <div className="relative w-full h-full rounded-3xl border border-border flex items-center justify-center overflow-hidden">
                <Motion
                  animate={{ 
                    scale: [1, 1.02, 1],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 6,
                    ease: "easeInOut"
                  }}
                  className="w-full h-full"
                >
                  <Avatar className="w-full h-full rounded-3xl">
                    <AvatarImage 
                      src={profilePhoto} 
                      alt="Samson Maithya" 
                      className="object-cover"
                    />
                    <AvatarFallback className="text-8xl font-bold bg-gradient-to-br from-primary to-accent">
                      SM
                    </AvatarFallback>
                  </Avatar>
                </Motion>
              </div>
              
              {/* Floating geometric elements */}
              <Motion
                animate={{ 
                  rotate: 360,
                  y: [0, 15, 0]
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-2xl shadow-lg"
                style={{ boxShadow: "var(--shadow-glow)" }}
              />
              
              <Motion
                animate={{ 
                  rotate: -360,
                  y: [0, -15, 0]
                }}
                transition={{ 
                  rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full shadow-lg"
                style={{ boxShadow: "var(--shadow-accent)" }}
              />
              
              <Motion
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ 
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 -right-8 w-12 h-12 border-4 border-primary rounded-lg"
              />
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}
