
import { useState } from "react";
import { Motion } from "@/components/ui/Motion";
import { Plus, ExternalLink } from "lucide-react";

interface PortfolioImageCardProps {
  src: string;
  alt: string;
  title: string;
  category: string;
}

export function PortfolioImageCard({ src, alt, title, category }: PortfolioImageCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Motion 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="group relative rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Motion
        animate={{ 
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ duration: 0.4 }}
      >
        <img 
          src={src}
          alt={alt}
          className="w-full h-auto portfolio-image"
        />
      </Motion>

      <Motion
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: isHovered ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex flex-col justify-end p-6"
      >
        <p className="text-accent/90 text-sm font-medium">{category}</p>
        <h3 className="text-white text-xl font-bold mt-1">{title}</h3>
        
        <div className="absolute top-4 right-4 flex space-x-2">
          <Motion 
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.2 }}
          >
            <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm text-white">
              <Plus className="h-4 w-4" />
            </button>
          </Motion>
          <Motion 
            whileHover={{ scale: 1.1 }} 
            transition={{ duration: 0.2 }}
          >
            <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm text-white">
              <ExternalLink className="h-4 w-4" />
            </button>
          </Motion>
        </div>
      </Motion>
    </Motion>
  );
}
