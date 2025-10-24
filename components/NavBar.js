'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import useScrollDirection from '../hooks/useScrollDirection';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About us', href: '/about' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Insights', href: '/insights' },
  { name: 'Contact us', href: '/contact' },
];

export default function NavBar() {
  const scrollDir = useScrollDirection();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out ${
        scrollDir === 'down' ? '-translate-y-full' : 'translate-y-0'
      }`}
      style={{marginTop:"-30px"}}
    >
      <div
        className={`relative transition-all duration-300 ${
          isScrolled
            ? 'bg-background/95 backdrop-blur-glass-lg border-b border-border'
            : 'bg-background backdrop-blur-glass'
        }`}
        style={{
          backdropFilter: isScrolled ? 'blur(16px)' : 'blur(8px)',
          WebkitBackdropFilter: isScrolled ? 'blur(16px)' : 'blur(8px)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-50"></div>

        <div className="relative flex items-center justify-between px-6 lg:px-8 max-w-7xl mx-auto">
          <Link
              href="/" 
              className="group flex items-center gap-3 font-orbitron text-md sm:text-xl text-text-primary font-bold tracking-wide transition-all duration-300 hover:scale-105"
            >
              <Image 
                src="/finalfinallogo.svg" 
                alt="Company Logo" 
                width={50} 
                height={50} 
                className="w-auto"

              />
              
              {/* <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                AMERICAN CONFIGURATORS COMPANY
              </span> */}
            </Link>
            
          <ul className="hidden lg:flex items-center gap-1 font-grotesk text-sm">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`group relative px-4 py-2.5 rounded-lg transition-all duration-300 font-semibold
                      ${
                        isActive
                          ? 'text-primary font-semibold'
                          : 'text-[#4B5358] hover:text-primary'
                      }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    <div className="absolute inset-0 rounded-lg bg-surface/50 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"></div>
                    <div className="absolute inset-0 rounded-lg border border-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    {isActive && (
                      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-all duration-300"></div>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative flex items-center justify-center w-10 h-10 text-text-primary transition-all duration-300"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`w-5 h-0.5 bg-current transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-glass-lg border-b border-border transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
        }}
      >
        <div className="px-6 py-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`block px-4 py-3 rounded-lg font-grotesk transition-all duration-300 ${
                  isActive
                    ? 'text-primary font-semibold'
                    : 'text-text-secondary hover:text-primary hover:bg-surface/50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
