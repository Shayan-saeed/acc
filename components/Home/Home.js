'use client'
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const DataCenterModel = dynamic(() => import('./DataCenterModel'), { ssr: false });

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100); // small delay for smoother entry
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-10 my-10">
      {/* Text Section */}
      <div className="relative z-20 max-w-3xl text-center lg:text-left mb-10 lg:mb-0">
        <div
          className={`transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Heading */}
          <h1
            className={`text-2xl lg:text-3xl xl:text-5xl font-orbitron font-bold leading-snug sm:leading-tight mb-6 transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <span className="block bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
              The North American Edge in Infrastructure Design
            </span>
          </h1>

          {/* Paragraph */}
          <p
            className={`text-base sm:text-lg md:text-xl text-text-muted font-rajdhani leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-xl mx-auto lg:mx-0 transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            Specializing in pre-sales design services for data centers and critical infrastructure, 
            we deliver scalable and efficient solutions aligned with local regulations and global ESG standards. 
            Our designs integrate advanced engineering with environmental responsibility, enabling clients 
            to build high-performance, future-ready, and sustainable digital infrastructure.
          </p>

          {/* CTA Button */}
          <div
            className={`flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start transition-all duration-1000 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <a
              href="/contact"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-grotesk text-base sm:text-md font-semibold bg-primary text-white transition-all duration-300 hover:bg-primary-light hover:scale-105 hover:shadow-glow focus:outline-none focus:ring-4 focus:ring-primary/50 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Request Design Consultation
                <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>
        </div>
      </div>

      {/* 3D Model */}
      <div
        className={`hidden sm:block w-full h-[280px] sm:h-[360px] md:h-[450px] lg:h-[500px] xl:h-[600px] transition-all duration-1000 delay-800 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
        }`}
      >
        <DataCenterModel />
      </div>
    </section>
  );
}
