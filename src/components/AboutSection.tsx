
import { Motion } from "@/components/ui/Motion";
import { 
  Layout, Code, PenTool, Palette, 
  Smartphone, FileStack, Zap 
} from "lucide-react";

const skills = [
  {
    icon: <Layout className="h-5 w-5" />,
    title: "UI Design",
    description: "Creating visual elements and layouts that enhance user experience"
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: "Frontend Development",
    description: "Implementing designs with clean, semantic HTML, CSS, and JavaScript"
  },
  {
    icon: <PenTool className="h-5 w-5" />,
    title: "Interaction Design",
    description: "Designing intuitive interactions and animations"
  },
  {
    icon: <Palette className="h-5 w-5" />,
    title: "Visual Design",
    description: "Creating aesthetically pleasing and consistent visual languages"
  },
  {
    icon: <Smartphone className="h-5 w-5" />,
    title: "Responsive Design",
    description: "Designing interfaces that work seamlessly across all devices"
  },
  {
    icon: <FileStack className="h-5 w-5" />,
    title: "Design Systems",
    description: "Building scalable and consistent design systems"
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Animation",
    description: "Creating meaningful animations that enhance user experience"
  }
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Motion
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="aspect-square max-w-md mx-auto lg:mx-0 relative">
              <Motion
                initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute inset-0 rounded-2xl bg-accent/10 transform"
              />
              <Motion
                initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute inset-0 rounded-2xl bg-primary/10 transform translate-x-4 translate-y-4"
              />
              <Motion
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="relative w-full h-full rounded-2xl overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-br from-accent/80 to-primary/50 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-5xl font-bold mb-4">5+</h3>
                    <p className="text-white/90 text-lg">Years of Experience</p>
                  </div>
                </div>
              </Motion>
            </div>
          </Motion>

          <div className="flex flex-col gap-6">
            <Motion
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="section-title">About Me</h2>
              <p className="text-muted-foreground mt-4">
                I'm a passionate UI Designer focused on creating beautiful and functional interfaces that solve real problems. With over 5 years of experience, I blend aesthetics with usability to deliver exceptional user experiences.
              </p>
              <p className="text-muted-foreground mt-4">
                My design process is collaborative and iterative, ensuring that the final product is not just visually appealing but also meets business goals and user needs.
              </p>
            </Motion>
            
            <Motion
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8"
            >
              <h3 className="text-xl font-semibold mb-6">My Skills & Expertise</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <Motion
                    key={skill.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-start gap-3 p-4 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div className="p-2 rounded-md bg-accent/10 text-accent">
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{skill.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>
                    </div>
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
