
import React, { HTMLAttributes, forwardRef } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export type MotionProps = HTMLMotionProps<"div"> & HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

const Motion = forwardRef<HTMLDivElement, MotionProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.div ref={ref} className={cn(className)} {...props}>
        {children}
      </motion.div>
    );
  }
);
Motion.displayName = "Motion";

export { Motion };
