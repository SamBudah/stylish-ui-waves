
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  once?: boolean;
}

export function RevealText({
  text,
  className,
  delay = 0,
  duration = 0.5,
  stagger = 0.03,
  once = true,
}: RevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once });
  
  // Split text into array of words
  const words = text.split(" ");

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + (i * stagger),
        duration,
      }
    })
  };
  
  return (
    <motion.div
      ref={ref}
      className={cn("overflow-hidden", className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          custom={i}
          variants={wordVariants}
          className="inline-block mr-[0.25em] last:mr-0"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}
