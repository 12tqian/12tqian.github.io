"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }} // Fade in + slide
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10, transition: { duration: 0 } }} // Instant exit
        transition={{ duration: 0.5, ease: "easeOut" }} // Smooth entry
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export { PageWrapper };