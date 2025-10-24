"use client";
import { Network, Power, Sun, Server, Wrench, Cpu } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const iconVariant = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: [1.2, 0.9, 1],
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const textVariant = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Expertise() {
  const items = [
    {
      icon: <Network size={32} strokeWidth={2} />,
      title: "Data Center Pre-Sales Design",
      desc: "End-to-end infrastructure design, from concept to detailed layouts, SLDs/HLDs, and technical documentation.",
    },
    {
      icon: <Power size={32} strokeWidth={2} />,
      title: "Power & Cooling Solutions",
      desc: "Efficient designs tailored to optimize energy use, performance, and resilience.",
    },
    {
      icon: <Sun size={32} strokeWidth={2} />,
      title: "BOQ & Technical Documentation",
      desc: "Accurate bills of quantity, compliance documentation, and supporting literature for seamless project execution.",
    },
    {
      icon: <Server size={32} strokeWidth={2} />,
      title: "CFD & Short Circuit Analysis",
      desc: "Advanced modeling to ensure safety, performance, and long-term reliability.",
    },
    {
      icon: <Wrench size={32} strokeWidth={2} />,
      title: "Compliance & ESG Integration",
      desc: "Designs aligned with local codes, international standards, and sustainability benchmarks.",
    },
    {
      icon: <Cpu size={32} strokeWidth={2} />,
      title: "Consulting & Advisory",
      desc: "Guiding clients on scalable, future-ready infrastructure strategies that minimize risk and maximize efficiency.",
    },
  ];

  return (
    <section className="relative bg-[#0E0E0E] py-20 overflow-hidden">
      {/* Subtle animated gradient background shimmer */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/20 via-black to-red-900/20 animate-gradient-x"></div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">Our Expertise.</h2>
          <p className="text-red-600 mt-2 tracking-wide">WHAT WE DO BEST</p>
        </div>

        {/* Items */}
        <motion.div
          className="grid md:grid-cols-2 gap-y-12 gap-x-16"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {items.map((item, idx) => (
            <div key={idx} className="flex items-start gap-4 group">
              {/* Icon */}
              <motion.div
                className="flex-shrink-0 w-20 h-20 rounded-full border border-white flex items-center justify-center text-red-600 bg-black/40 group-hover:bg-white group-hover:text-black transition-all duration-300"
                variants={iconVariant}
              >
                {item.icon}
              </motion.div>

              {/* Text */}
              <motion.div variants={textVariant}>
                <h3 className="text-white font-bold text-xl">{item.title}</h3>
                <p className="text-white/80 text-sm mt-1 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
