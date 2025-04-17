
import { Motion } from "@/components/ui/Motion";
import { RevealText } from "@/components/ui/reveal-text";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Motion
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-6"
          >
            <Motion
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <p className="text-accent font-medium">Hello there, I'm</p>
            </Motion>
            
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <RevealText 
                text="UI Designer crafting beautiful interfaces"
                delay={0.5}
                className="text-gradient"
              />
            </div>
            
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.7 }}
            >
              <p className="text-muted-foreground text-lg md:text-xl max-w-lg">
                Creating intuitive, engaging, and user-centered experiences that balance form and function for digital products.
              </p>
            </Motion>
            
            <Motion
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="flex gap-4 mt-2"
            >
              <Motion whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <a href="#projects" className="button-primary">
                  View Projects
                </a>
              </Motion>
              <Motion whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <a href="#contact" className="button-secondary">
                  Get in Touch
                </a>
              </Motion>
            </Motion>
          </Motion>
          
          <Motion
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-full bg-gradient-to-br from-accent/20 to-primary/20 p-6 mx-auto max-w-md">
              <div className="w-full h-full bg-accent/5 rounded-full flex items-center justify-center overflow-hidden">
                <Motion
                  animate={{ y: [0, -5, 0] }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    ease: "easeInOut"
                  }}
                  className="w-3/4 h-3/4"
                >
                  <div className="w-full h-full bg-gradient-to-br from-accent to-primary/50 rounded-full flex items-center justify-center text-white text-7xl font-bold">
                    UI
                  </div>
                </Motion>
              </div>
              
              {/* Floating elements */}
              <Motion
                animate={{ 
                  rotate: 360,
                  y: [0, 5, 0]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute top-10 right-10 w-12 h-12 bg-white shadow-lg rounded-lg"
              />
              
              <Motion
                animate={{ 
                  rotate: -360,
                  y: [0, -5, 0]
                }}
                transition={{ 
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute bottom-14 left-10 w-8 h-8 bg-accent shadow-lg rounded-full"
              />
            </div>
          </Motion>
        </div>
      </div>
    </section>
  );
}
