
import { Motion } from "@/components/ui/Motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
}

export function SectionDivider({ className }: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  return (
    <div className={cn("relative h-16 flex items-center justify-center", className)}>
      <Motion
        ref={ref}
        initial={{ opacity: 0, width: "0%" }}
        animate={isInView ? { opacity: 1, width: "100%" } : {}}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
      />
      <Motion
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="absolute bg-background border border-border rounded-full p-2"
      >
        <div className="h-2 w-2 rounded-full bg-accent" />
      </Motion>
    </div>
  );
}
