"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <section className="relative w-full py-16 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
        
        {/* Left Column (40%) */}
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          <h2 className="text-2xl md:text-3xl font-orbitron font-bold text-text-primary mb-6">
            A Little Bit About ACC
          </h2>
          <div className="relative w-full h-64 lg:h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/about-bg.jpeg"
              alt="About ACC"
              fill
              className="object-cover object-center"
            />
          </div>
        </motion.div>

        {/* Right Column (60%) */}
        <motion.div 
          className="lg:col-span-3"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="border-t-4 border-red-600 pt-6">
            <p className="text-text-muted font-rajdhani text-lg leading-relaxed whitespace-pre-line">
              American Configurators is built on the belief that great infrastructure starts with great design. We specialize in pre-sales design services for data centers, edge facilities, and critical infrastructure — helping clients minimize risks, optimize resources, and accelerate deployment.

              Our strength lies in understanding client needs, aligning with local regulations and global esg standards, and delivering solutions that balance performance with environmental responsibility. With certified experts and proven methodologies, we partner with organizations across north america to design infrastructure that doesn’t just support growth, but drives it.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
