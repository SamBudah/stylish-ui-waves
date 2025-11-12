
import { Motion } from "@/components/ui/Motion";
import { 
  Code2, 
  Smartphone, 
  Database, 
  Shield, 
  Figma, 
  FileCode,
  Cloud,
  Lock
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming",
    icon: <Code2 className="h-6 w-6" />,
    skills: [
      { name: "Python", level: 90 },
      { name: "PHP", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "Dart", level: 75 }
    ]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-6 w-6" />,
    skills: [
      { name: "Flutter", level: 88 },
      { name: "React Native", level: 75 },
      { name: "UI/UX Design", level: 92 }
    ]
  },
  {
    title: "Backend & Database",
    icon: <Database className="h-6 w-6" />,
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Firebase", level: 88 },
      { name: "REST APIs", level: 82 }
    ]
  },
  {
    title: "Cybersecurity",
    icon: <Shield className="h-6 w-6" />,
    skills: [
      { name: "Security Analysis", level: 80 },
      { name: "Penetration Testing", level: 75 },
      { name: "Risk Assessment", level: 85 }
    ]
  }
];

const tools = [
  { name: "Figma", icon: <Figma className="h-8 w-8" /> },
  { name: "VS Code", icon: <FileCode className="h-8 w-8" /> },
  { name: "Firebase", icon: <Cloud className="h-8 w-8" /> },
  { name: "Git", icon: <Code2 className="h-8 w-8" /> },
  { name: "MySQL", icon: <Database className="h-8 w-8" /> },
  { name: "Security Tools", icon: <Lock className="h-8 w-8" /> }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

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
              Skills & Expertise
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for building modern digital solutions
          </p>
        </Motion>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <Motion
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <Motion
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (catIndex * 0.1) + (skillIndex * 0.05) }}
                  >
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <Motion
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: (catIndex * 0.1) + (skillIndex * 0.05) + 0.2, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                        />
                      </div>
                    </div>
                  </Motion>
                ))}
              </div>
            </Motion>
          ))}
        </div>

        {/* Tools & Technologies */}
        <Motion
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-2">Tools & Technologies</h3>
            <p className="text-muted-foreground">Technologies I work with daily</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {tools.map((tool, index) => (
              <Motion
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.1, 
                  boxShadow: "var(--shadow-glow)",
                  rotate: [0, -5, 5, -5, 0]
                }}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 cursor-pointer"
              >
                <div className="text-primary mb-2">{tool.icon}</div>
                <p className="text-sm font-medium text-foreground">{tool.name}</p>
              </Motion>
            ))}
          </div>
        </Motion>
      </div>
    </section>
  );
}
