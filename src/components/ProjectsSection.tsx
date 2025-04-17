
import { useState } from "react";
import { Motion } from "@/components/ui/Motion";
import { ChevronRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Financial Dashboard",
    category: "UI/UX Design",
    description: "A clean, intuitive financial dashboard with data visualization components and user-friendly interface.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    tags: ["Dashboard", "Data Visualization", "Financial"]
  },
  {
    id: 2,
    title: "E-commerce Mobile App",
    category: "Mobile Design",
    description: "E-commerce app with streamlined checkout process and personalized product recommendations.",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    tags: ["Mobile", "E-commerce", "User Flow"]
  },
  {
    id: 3,
    title: "Smart Home Control System",
    category: "Product Design",
    description: "Intuitive interface for controlling connected home devices with customizable dashboards.",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["IoT", "Dashboard", "Smart Home"]
  },
  {
    id: 4,
    title: "Task Management Platform",
    category: "Web Application",
    description: "Collaborative task management platform with intuitive drag-and-drop interface and progress tracking.",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Productivity", "Collaboration", "SaaS"]
  }
];

export default function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container-custom">
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="section-title mx-auto">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            A showcase of my recent interface design work, focusing on user experience and beautiful interactions.
          </p>
        </Motion>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, index) => (
            <Motion 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative overflow-hidden rounded-xl bg-white shadow-md hover-card"
            >
              <div className="aspect-video overflow-hidden">
                <Motion 
                  animate={{ 
                    scale: hoveredProject === project.id ? 1.05 : 1
                  }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full"
                >
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                </Motion>
              </div>

              <Motion
                animate={{ 
                  y: hoveredProject === project.id ? 0 : 10,
                  opacity: hoveredProject === project.id ? 1 : 0.9
                }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 text-white"
              >
                <span className="text-sm font-medium text-accent/80">{project.category}</span>
                <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
                <p className="text-white/80 mt-2 line-clamp-2">{project.description}</p>
                
                <Motion
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ 
                    opacity: hoveredProject === project.id ? 1 : 0,
                    x: hoveredProject === project.id ? 0 : -10
                  }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="mt-4 flex items-center gap-2 text-sm font-medium"
                >
                  View Project <ChevronRight className="h-4 w-4" />
                </Motion>
              </Motion>
            </Motion>
          ))}
        </div>
        
        <Motion
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mt-12"
        >
          <a href="#" className="button-primary flex items-center gap-2">
            View All Projects <ChevronRight className="h-4 w-4" />
          </a>
        </Motion>
      </div>
    </section>
  );
}
