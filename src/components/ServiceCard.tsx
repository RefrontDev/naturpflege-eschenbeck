"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  href: string;
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
  return (
    <motion.div
      className="flex flex-col rounded-2xl border bg-card p-6 shadow-sm group h-full"
      whileHover={{
        y: -8,
        boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      <motion.div
        className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
        whileHover={{
          scale: 1.1,
          rotate: 5,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 10
        }}
      >
        {icon}
      </motion.div>
      <h3 className="mb-2 text-xl font-semibold leading-none tracking-tight text-foreground group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="mb-4 text-muted-foreground flex-1">
        {description}
      </p>
      <Link href={href} className="inline-flex items-center text-sm font-medium text-primary hover:underline">
        Mehr erfahren <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
}
