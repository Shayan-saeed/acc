'use client'
import Image from "next/image";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "Equipment Layout & Placement",
    description: `Optimized infrastructure layouts that ensure efficient space utilization, accessibility, and compliance with industry best practices. Every placement is engineered to support scalability, operational resilience, and long-term reliability.`,
    image: "/soln1.jpg",
    reverse: false,
  },
  {
    title: "Bill of Quantities (Level 1 & 2) & Documentation",
    description: `Accurate multi-level BOQs (L1 & L2) supported by detailed design documentation for transparent cost estimation, procurement planning, and seamless project execution.`,
    image: "/soln2.jpg",
    reverse: true,
  },
  {
    title: "High-Level Design (HLD) & Single-Line Diagrams (SLD)",
    description: `Structured high-level designs and electrical single-line diagrams that define capacity, redundancy, and overall system architecture — forming the backbone of resilient infrastructure planning.`,
    image: "/soln3.jpg",
    reverse: false,
  },
  {
    title: "Computational Fluid Dynamics (CFD) Analysis",
    description: `Advanced airflow and thermal simulations to validate cooling strategies, eliminate hotspots, and maximize energy efficiency — ensuring facilities perform reliably under real-world conditions.`,
    image: "/soln4.jpg",
    reverse: true,
  },
  {
    title: "Short Circuit & Electrical Protection Analysis",
    description: `Comprehensive fault and protection studies to safeguard infrastructure against electrical risks. Designs are engineered to maintain resilience, safety, and uptime even under peak-load scenarios.`,
    image: "/soln5.jpg",
    reverse: false,
  },
  {
    title: "Technical Datasheets, Literature & Compliance Documentation",
    description: `Complete technical packages including datasheets, compliance literature, and supporting design narratives. These resources provide clarity, alignment, and validation for procurement, auditing, and execution.`,
    image: "/soln6.jpeg",
    reverse: true,
  },
  {
    title: "Compliance & ESG Integration",
    description: `Design solutions aligned with local codes, global standards, and ESG benchmarks, embedding sustainability and compliance into the core of every project. We help clients reduce risks while meeting corporate responsibility goals.`,
    image: "/soln7.jpeg",
    reverse: false,
  },
  {
    title: "Consulting & Strategic Advisory",
    description: `Expert advisory services covering technology selection, redundancy planning, scalability strategies, and sustainability integration. Our consulting ensures infrastructure investments deliver long-term value and align with business objectives.`,
    image: "/soln8.jpeg",
    reverse: true,
  },
  {
    title: "Technical Presentations & Client Workshops",
    description: `Clear, professional presentations and tailored workshops designed to communicate design intent, compliance considerations, and technical value. These sessions enable stakeholders to align confidently on project direction.`,
    image: "/soln9.jpeg",
    reverse: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.2, ease: "easeOut" },
  }),
};

export default function SolutionsSection() {
  return (
    <section className="py-16 bg-gray-50 my-16">
      <div className="max-w-6xl mx-auto px-6 space-y-20">
        {solutions.map((item, index) => (
          <motion.div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              item.reverse ? "md:flex-row-reverse" : ""
            }`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <span className="absolute text-[5rem] md:text-[8rem] font-orbitron font-bold text-gray-200/40 -z-10 top-0 md:-top-10 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0">
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Image */}
             <div className="w-full md:w-1/2 relative group">
              <div className="overflow-hidden rounded-xl shadow-lg">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="rounded-xl object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition"></div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 font-orbitron">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-6 font-rajdhani leading-relaxed text-lg">
                {item.description}
              </p>
              {item.extra && <p className="text-gray-600 mb-4">{item.extra}</p>}
              <a
                href="#"
                className="inline-block bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-2.5 rounded-full shadow-md hover:shadow-lg transition-transform hover:scale-105"
              >
                Learn More →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
