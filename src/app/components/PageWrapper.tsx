"use client";

import { motion, AnimatePresence } from "framer-motion";

import { usePathname } from "next/navigation";

import { ReactNode } from "react";

const PageWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={usePathname()}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1 }} // Adjust fade duration as needed
        className="w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export { PageWrapper };
