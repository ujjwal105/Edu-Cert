"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "motion/react";


export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        With information overload, nothing sticks. Everything starts to blur.
        Everything is{" "}
        <Highlight className="text-black dark:text-white">
          a copy, of a copy, of a copy.
        </Highlight>{" "}
        But when you learn with purpose—through structured paths, real projects,
        and mentorship— everything starts to make sense. Learn the way that
        actually changes you.
      </motion.h1>
    </HeroHighlight>
  );
}
