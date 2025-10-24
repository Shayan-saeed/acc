"use client";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative h-[90vh] w-full flex items-center justify-start overflow-hidden p-24">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/contact-bg.jpg" 
          alt="About Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-orbitron font-bold text-white mb-4">
          Contact us
        </h1>
        {/* Netflix-style underline */}
        <div className="w-30 h-[4px] bg-red-600 rounded"></div>
      </div>
    </section>
  );
}
