
import { Motion } from "@/components/ui/Motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-primary text-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center md:text-left">
              <h4 className="text-xl font-bold text-white">Portfolio</h4>
              <p className="text-white/70 mt-2 max-w-md">
                Creating beautiful and functional interfaces that solve real problems.
              </p>
            </div>
          </Motion>
          
          <Motion
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 md:mt-0 flex flex-col items-center"
          >
            <button 
              onClick={scrollToTop}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
            <p className="text-white/70 text-sm mt-4">
              &copy; {new Date().getFullYear()} UI Portfolio. All rights reserved.
            </p>
          </Motion>
        </div>
      </div>
    </footer>
  );
}
