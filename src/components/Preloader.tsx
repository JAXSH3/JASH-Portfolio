import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AppleHelloEnglishEffect } from "./HelloEffects";

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [showHello, setShowHello] = useState(true);

  const handleComplete = () => {
    setShowHello(false);
    setTimeout(() => {
      onComplete();
    }, 600);
  };

  return (
    <AnimatePresence mode="wait">
      {showHello && (
        <motion.div
          key="hello-overlay"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <AppleHelloEnglishEffect
            className="text-white"
            onAnimationComplete={handleComplete}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};
