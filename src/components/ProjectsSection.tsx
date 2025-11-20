
import { useState } from "react";
import { Motion } from "@/components/ui/Motion";
import { ExternalLink, Github } from "lucide-react";

const categories = ["All", "Data", "Design", "Development", "Cybersecurity"];

const projects = [
  {
    id: 1,
    title: "Website Whether Words",
    category: "Development",
    description: "A web application built to explore weather-related word insights and visualizations. [Replace with actual details from the repo]",
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3",
    tags: ["HTML", "JavaScript", "API"],
    githubUrl: "https://github.com/SamBudah/website-whether-words"
  },
  {
    id: 2,
    title: "QuoteApp",
    category: "Development",
    description: "A mobile or web app to deliver and manage quotes (view, save, share). [Replace with actual details]",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
    tags: ["Android", "Kotlin", "Quotes"],
    githubUrl: "https://github.com/SamBudah/QuoteApp"
  },
  {
    id: 3,
    title: "Streamlit Customer Segmentation",
    category: "Data",
    description: "A data science project using Streamlit to segment e-commerce customers, with visualizations and interactive dashboard. [Replace with actual details]",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    tags: ["Python", "Streamlit", "ML"],
    githubUrl: "https://github.com/SamBudah/streamlit-customer_segmentation"
  },
  {
    id: 4,
    title: "Arduino Bluetooth Security System",
    category: "Cybersecurity",
    description: "An Arduino-based hardware project integrating Bluetooth for security system implementation. [Replace with actual details]",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["Arduino", "Bluetooth", "Embedded"],
    githubUrl: "https://github.com/SamBudah/Arduino_Bluetooth_SecuritySystem"
  },
  {
    id: 5,
    title: "ResTop Analytics",
    category: "Data",
    description: "A restaurant or hospitality analytics system named ResTop Analytics for tracking/reservations/insights. [Replace with actual details]",
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    tags: ["Analytics", "Dashboard", "MySQL"],
    githubUrl: "https://github.com/SamBudah/ResTopAnalytics"
  },
  /* {
    id: 2,
    title: "Transport Company Computerization System",
    category: "Development",
    description: "Comprehensive transport management system with Flutter frontend and Firebase backend for fleet management, route optimization, and real-time tracking.",
    imageUrl: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957",
    tags: ["Flutter", "Firebase", "Management"],
    githubUrl: "https://github.com/SamBudah/"
  },
  {
    id: 3,
    title: "Inventory Management System",
    category: "Development",
    description: "PHP & MySQL web application with role-based access, real-time inventory tracking, analytics dashboard, and CSV/PDF export functionality.",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d",
    tags: ["PHP", "MySQL", "Analytics"],
    githubUrl: "https://github.com/SamBudah/"
  }, */
  {
    id: 4,
    title: "Customer Segmentation for E-commerce",
    category: "Data",
    description: "Python machine learning model using K-Means clustering and Random Forest to segment customers and predict purchasing behavior patterns.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    tags: ["Python", "ML", "Data Science"],
    githubUrl: "https://github.com/SamBudah/"
  },
  /* {
    id: 5,
    title: "Flight Carbon Emissions Calculator",
    category: "Development",
    description: "Flask-based web application for calculating and tracking CO₂ emissions from flights, promoting environmental awareness and sustainability.",
    imageUrl: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05",
    tags: ["Flask", "Python", "Environment"],
    githubUrl: "https://github.com/SamBudah/"
  },
  {
    id: 6,
    title: "Community Security App",
    category: "Cybersecurity",
    description: "Flutter mobile app enabling community-police coordination for incident reporting, real-time alerts, and neighborhood safety management.",
    imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
    tags: ["Flutter", "Security", "Firebase"],
    githubUrl: "https://github.com/SamBudah/"
  },
  {
    id: 7,
    title: "Mutua.made Portfolio",
    category: "Design",
    description: "Personal portfolio website showcasing creative and technical projects with modern design, smooth animations, and responsive layout.",
    imageUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
    tags: ["React", "UI/UX", "Design"],
    githubUrl: "https://github.com/SamBudah/"
  } */
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
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium flex items-center gap-2 hover:shadow-lg transition-all"
                  >
                    <ExternalLink className="h-4 w-4" />
                    View on GitHub
                  </a>
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
