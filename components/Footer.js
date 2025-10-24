import React from "react";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1B1B1B] text-white border-t border-border/30 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_top_left,white,transparent_70%)]" />
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_bottom_right,white,transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo + Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/acc-new.png" alt="Company Logo" width={48} height={48} className="w-15 h-15"/>
              <span className="font-orbitron text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                American Configurators Company
              </span>
            </div>
            <p className="text-text-muted font-rajdhani leading-relaxed max-w-md text-base">
              The North American Edge in Infrastructure Design. Pioneering
              high-performance data center & edge computing designs with
              precision and foresight.
            </p>
          </div>

          {/* Location */}
          <div>
            <h3 className="font-orbitron font-bold text-lg text-text-primary mb-4 border-b border-border/30 pb-2">
              Our Location
            </h3>
            <p className="text-text-muted font-rajdhani leading-relaxed text-base flex items-start gap-2">
              <MapPin className="w-5 h-5 text-primary mt-1" />
              <span>
                431B 41st Avenue NE <br />
                Calgary, AB T2E 2N4
              </span>
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-orbitron font-bold text-lg text-text-primary mb-4 border-b border-border/30 pb-2">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-text-muted font-rajdhani text-base">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" /> +1 (825) 994 6540
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" /> info@americanconfigurators.com
              </li>
              <li className="flex gap-4 mt-3">
                <Link
                  href="https://www.linkedin.com/company/american-configurators-company/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="hover:text-primary transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  aria-label="Twitter"
                  className="hover:text-primary transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="hover:text-primary transition-colors duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-orbitron font-bold text-lg text-text-primary mb-4 border-b border-border/30 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2 text-text-muted font-rajdhani text-base">
              <li>
                <Link href="/" className="hover:text-primary transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-primary transition-colors duration-300">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-primary transition-colors duration-300">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30 flex justify-center items-center gap-4">
          <p className="text-text-muted font-rajdhani text-sm">
            © 2025 American Configurators Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
