
import { Motion } from "@/components/ui/Motion";
import { Code2, Palette, Shield, Database } from "lucide-react";

const highlights = [
  {
    icon: <Database className="h-6 w-6" />,
    title: "Data Analysis",
    description: "Transform complex data into actionable insights"
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "UI/UX Design",
    description: "Create intuitive and beautiful user experiences"
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    title: "Development",
    description: "Build robust applications with Python, Flutter, PHP"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Cybersecurity",
    description: "Ensure digital safety and data protection"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container-custom relative z-10">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </Motion>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Motion
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              <Motion
                animate={{ 
                  rotate: [0, 5, 0, -5, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="aspect-square max-w-md mx-auto rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-1"
              >
                <div className="w-full h-full rounded-3xl bg-card border border-border flex items-center justify-center overflow-hidden backdrop-blur-sm">
                  <div className="text-center p-8">
                    <div className="text-7xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent mb-4">
                      SM
                    </div>
                    <p className="text-muted-foreground text-sm">Samson Maithya</p>
                    <p className="text-primary font-semibold mt-1">Mutua.made</p>
                  </div>
                </div>
              </Motion>
              
              {/* Decorative elements */}
              <Motion
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -left-4 w-24 h-24 border-4 border-primary/30 rounded-full"
              />
              <Motion
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-accent/30 rounded-2xl"
              />
            </div>
          </Motion>

          <div className="flex flex-col gap-6 order-1 lg:order-2">
            <Motion
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-foreground text-lg leading-relaxed">
                I'm a <span className="text-primary font-semibold">creative technologist</span> passionate about bridging design, analytics, and development. My journey combines technical precision with artistic creativity to deliver elegant digital solutions.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                With expertise spanning <span className="text-accent">Python, Flutter, PHP, and Firebase</span>, alongside a strong foundation in UI/UX design and cybersecurity, I transform complex challenges into intuitive, secure, and beautiful experiences.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Whether it's analyzing data patterns, designing pixel-perfect interfaces, building scalable applications, or securing digital assets — I bring a holistic approach to every project.
              </p>
            </Motion>
            
            <Motion
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <Motion
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    whileHover={{ scale: 1.05, boxShadow: "var(--shadow-glow)" }}
                    className="p-5 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 text-primary w-fit mb-3">
                      {item.icon}
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Motion>
                ))}
              </div>
            </Motion>
          </div>
        </div>
      </div>
    </section>
  );
}
