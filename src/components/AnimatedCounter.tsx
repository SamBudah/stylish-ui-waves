
import { useState, useEffect, useRef } from "react";
import { Motion } from "@/components/ui/Motion";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  className?: string;
}

export function AnimatedCounter({ from, to, duration = 1.5, className }: AnimatedCounterProps) {
  const [count, setCount] = useState(from);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (!isInView) return;
    
    let start = from;
    const increment = (to - from) / (duration * 60);
    let timer: number;
    
    const updateCount = () => {
      if (start + increment < to) {
        setCount(Math.floor(start + increment));
        start += increment;
        timer = requestAnimationFrame(updateCount);
      } else {
        setCount(to);
      }
    };
    
    timer = requestAnimationFrame(updateCount);
    
    return () => cancelAnimationFrame(timer);
  }, [from, to, duration, isInView]);
  
  return (
    <Motion
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4 }}
      className={className}
    >
      {count}
    </Motion>
  );
}
