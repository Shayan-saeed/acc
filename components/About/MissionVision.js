"use client";
import { Glasses, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 },
  }),
};

export default function MissionVision() {
  const data = [
    {
      icon: <Glasses className="w-10 h-10 text-red-600" />,
      title: "Our Vision",
      text: "To be the trusted partner in shaping sustainable, compliant, and future-ready data center designs that power digital transformation and enable a smarter, greener world.",
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-red-600" />,
      title: "Our Mission",
      text: "Deliver pre-sales design solutions that go beyond engineering — ensuring compliance, driving efficiency, and embedding sustainability into every project. We aim to help our clients achieve long-term value by designing infrastructure that is reliable today and ready for tomorrow.",
    },
  ];

  return (
    <section className="w-full py-20 px-6 lg:px-12 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {data.map((item, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center text-center p-8 rounded-xl shadow-md bg-white hover:shadow-lg transition"
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <div className="mb-4 p-4 bg-red-600/10 rounded-full">{item.icon}</div>
            <h3 className="text-2xl font-orbitron font-bold text-text-primary mb-4">
              {item.title}
            </h3>
            <p className="text-text-muted font-rajdhani text-lg leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
