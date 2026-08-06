import { useEffect, useState } from "react";
import { AnimatePresence, motion, type MotionProps } from "framer-motion";

interface WordRotateProps {
  words: string[];
  duration?: number;
  motionProps?: MotionProps;
  className?: string;
}

export function WordRotate({
  words,
  duration = 2500,
  motionProps = {
    initial: { opacity: 0, y: -40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 40 },
    transition: { duration: 0.3, ease: "easeOut" },
  },
  className = "",
}: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <span className="inline-flex overflow-hidden py-1 px-0.5 items-center justify-center">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          className={`inline-block whitespace-nowrap ${className}`}
          {...motionProps}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
