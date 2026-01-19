"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

type SlideDirection = "up" | "down" | "left" | "right" | "none";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: SlideDirection;
  duration?: number;
  once?: boolean;
  amount?: number;
}

const getDirectionOffset = (direction: SlideDirection): { x: number; y: number } => {
  switch (direction) {
    case "up":
      return { x: 0, y: 40 };
    case "down":
      return { x: 0, y: -40 };
    case "left":
      return { x: 40, y: 0 };
    case "right":
      return { x: -40, y: 0 };
    case "none":
    default:
      return { x: 0, y: 0 };
  }
};

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
  amount = 0.2,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  const offset = getDirectionOffset(direction);

  const variants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger container for multiple children
interface StaggerContainerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  once?: boolean;
  amount?: number;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
  amount = 0.2,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger item to be used inside StaggerContainer
interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  direction?: SlideDirection;
  duration?: number;
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
  duration = 0.5,
}: StaggerItemProps) {
  const offset = getDirectionOffset(direction);

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
