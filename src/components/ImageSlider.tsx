"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ImageSliderProps {
  images: { src: string; alt: string }[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative group w-full aspect-[16/9] overflow-hidden rounded-2xl bg-muted/20">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full"
        >
          <div className="absolute inset-0 flex items-center justify-center bg-muted/10">
             {/* Placeholder UI if image fails to load or while loading */}
             <span className="text-muted-foreground/20 text-4xl font-bold">{currentIndex + 1}</span>
          </div>
          {/* Use div with background for placeholder if no real images, but src uses Image component */}
           <div className="h-full w-full flex items-center justify-center bg-secondary/10 relative">
                 <span className="absolute z-10 bg-background/80 px-4 py-2 rounded-md backdrop-blur-sm text-sm font-medium">
                    {images[currentIndex].alt}
                </span>
                {/* Simulated Image Content */}
                 <div className="absolute inset-0 flex items-center justify-center text-muted-foreground opacity-20 text-9xl font-serif">
                    {currentIndex + 1}
                </div>
            </div>
            {/* Note: I'm not using Next/Image with real URLs here as requested for placeholders, 
                but structure supports it. Replacing inner div with Image when real images exist. 
            */}
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
        <Button
          variant="secondary"
          size="icon"
          className="pointer-events-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className="pointer-events-auto rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              index === currentIndex ? "bg-primary w-6" : "bg-primary/30 hover:bg-primary/50"
            }`}
            aria-label={`Gehe zu Bild ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
