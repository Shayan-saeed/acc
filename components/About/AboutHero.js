"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-start overflow-hidden p-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/about-bg.jpeg" 
          alt="About Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-4">
          Prologue
        </h1>
        {/* Netflix-style underline */}
        <motion.div 
          className="w-30 h-[4px] bg-red-600 rounded" 
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          />
      </motion.div>
    </section>
  );
}
