"use client";
import Link from "next/link";
import {
  Lightbulb,
  Network,
  Monitor,
  Server,
  Shield,
  Cpu,
  FileText,
  Download,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function InsightsPage() {
  return (
    <div className="bg-gray-50 min-h-screen py-20 my-20">
      {/* Hero Section */}
      <div className="text-center mb-16 px-4">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-gray-900 relative inline-block"
        >
          INSIGHTS
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-red-600 rounded-full"></span>
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Expert perspectives on data center design, compliance, and ESG
          integration.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto space-y-20 px-4">
        {/* Latest Perspectives */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-8">
            LATEST PERSPECTIVES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: Lightbulb,
                title: "The Future of ESG In Data Center Design",
                category: "ESG",
                bg: "/soln9.jpeg",
              },
              {
                icon: Network,
                title:
                  "The AI Infrastructure Imperative: Why Smart Design Drives Success",
                category: "AI",
                bg: "/soln7.jpeg",
              },
              {
                icon: Monitor,
                title:
                  "Smart Resilience: Engineering High-Performance Data Centers",
                category: "RESILIENCE",
                bg: "/soln6.jpeg",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: true }}
                className="relative rounded-xl shadow-lg hover:shadow-xl transition overflow-hidden group min-h-[260px]"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${item.bg})` }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition"></div>

                {/* Category Tag */}
                <span className="absolute top-4 right-4 bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full z-10">
                  {item.category}
                </span>

                {/* Content */}
                <div className="relative z-10 p-6 text-white flex flex-col h-full">
                  <item.icon className="w-9 h-9 mb-3 text-red-400" />
                  <h3 className="font-semibold text-lg mb-3 flex-grow leading-snug">
                    {item.title}
                  </h3>
                  <Link
                    href={`/insights/${i + 1}`}
                    className="font-semibold flex items-center gap-2 hover:underline text-sm"
                  >
                    READ MORE <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Explore by Topic + Resources */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Explore by Topic */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              EXPLORE BY TOPIC
            </h2>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Server, title: "DESIGN", subtitle: "Best Practices" },
                { icon: Shield, title: "COMPLIANCE", subtitle: "& ESG" },
                { icon: Cpu, title: "TECHNICAL", subtitle: "Deep Dives" },
                { icon: FileText, title: "CASE", subtitle: "Studies" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  variants={fadeUp}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition group cursor-pointer"
                >
                  <div className="mb-2 text-red-600 group-hover:scale-110 transition">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-800">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">{item.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Results + Guides */}
          <div className="space-y-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              className="bg-white p-6 rounded-xl shadow border border-gray-200 relative"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                PROVEN RESULTS IN ACTION
              </h3>
              <p className="text-gray-600 text-sm">
                Optimizing Cooling for a Financial Data Center: <br />{" "}
                <span className="font-medium">
                  25% Energy Savings Through CFD
                </span>
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              className="bg-white p-6 rounded-xl shadow border border-gray-200 flex items-center gap-3 hover:shadow-lg transition cursor-pointer"
            >
              <Download className="w-5 h-5 text-red-600" />
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  GUIDES & TECHNICAL RESOURCES
                </h3>
                <p className="text-gray-600 text-xs">
                  5 Steps to Ensure TIA-942 Compliance
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          className="text-center px-6 py-12 rounded-xl bg-gradient-to-r from-primary to-red-500 text-white shadow-lg"
        >
          <p className="mb-6 text-lg font-light">
            Ready to put insights into action? Let’s design the future together.
          </p>
          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-primary font-semibold rounded-sm shadow hover:shadow-md transition"
          >
            REQUEST A CONSULTATION
          </Link>
        </motion.section>
      </div>
    </div>
  );
}
