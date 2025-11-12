
import { useState } from "react";
import { Motion } from "@/components/ui/Motion";
import { ExternalLink, Github } from "lucide-react";

const categories = ["All", "Data", "Design", "Development", "Cybersecurity"];

const projects = [
  {
    id: 1,
    title: "Data Analytics Dashboard",
    category: "Data",
    description: "Interactive dashboard for real-time data visualization and insights using Python and modern analytics frameworks.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["Python", "Data Viz", "Analytics"]
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Development",
    description: "Secure cross-platform banking application built with Flutter, featuring biometric authentication and real-time transactions.",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    tags: ["Flutter", "Firebase", "UI/UX"]
  },
  {
    id: 3,
    title: "Brand Identity System",
    category: "Design",
    description: "Complete brand identity and design system for a tech startup, including logo, color palette, and component library.",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
    tags: ["Figma", "Branding", "Design System"]
  },
  {
    id: 4,
    title: "Security Audit Platform",
    category: "Cybersecurity",
    description: "Comprehensive security audit tool for web applications with vulnerability scanning and threat assessment capabilities.",
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    tags: ["Security", "PHP", "MySQL"]
  },
  {
    id: 5,
    title: "E-commerce Platform",
    category: "Development",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    tags: ["PHP", "MySQL", "APIs"]
  },
  {
    id: 6,
    title: "UX Research Study",
    category: "Design",
    description: "In-depth user experience research and usability testing for improving mobile app engagement and retention.",
    imageUrl: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
    tags: ["UX Research", "Prototyping", "Testing"]
  }
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-background to-secondary/30 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4" />
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A showcase of my work across data analysis, design, development, and security
          </p>
        </Motion>

        {/* Category Filter */}
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg"
                  : "bg-card text-foreground border border-border hover:border-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </Motion>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Motion 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300"
              whileHover={{ y: -8, boxShadow: "var(--shadow-accent)" }}
            >
              <div className="aspect-video overflow-hidden">
                <Motion 
                  animate={{ 
                    scale: hoveredProject === project.id ? 1.1 : 1
                  }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </Motion>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-primary/20 text-primary">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Motion
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: hoveredProject === project.id ? 1 : 0
                }}
                className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/80 to-transparent flex items-end justify-center pb-8 pointer-events-none"
              >
                <div className="flex gap-3 pointer-events-auto">
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2 hover:shadow-lg transition-all">
                    <ExternalLink className="h-4 w-4" />
                    View
                  </button>
                </div>
              </Motion>
            </Motion>
          ))}
        </div>
        
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <Motion 
            whileHover={{ scale: 1.05, boxShadow: "var(--shadow-glow)" }} 
            whileTap={{ scale: 0.98 }}
          >
            <a 
              href="https://github.com/SamBudah/" 
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-lg shadow-lg flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View All on GitHub
            </a>
          </Motion>
        </Motion>
      </div>
    </section>
  );
}
