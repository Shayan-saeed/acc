'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const clients = [
  { name: 'Standard Chartered', logo: '/Standard_Chartered_Logo.png' },
  { name: 'Etisalat', logo: '/Etisalat_Logo.svg' },
  { name: 'VEON', logo: '/veon-logo.jpg' },
  { name: 'Omzest', logo: '/OMZEST_Logo.png' },
  { name: 'EBM', logo: '/EBM_LOGO.jpg' },
  { name: 'Dubai Islamic Bank', logo: '/DIB_LOGO.png' },
  { name: 'China Mobile', logo: '/china-mobile-logo.png' },
  { name: 'HRSG', logo: '/HRSG_LOGO.png' },
]

// Variants for staggering animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function ClientsSection() {
  return (
    <section className="relative py-16 px-6 lg:px-8 bg-background">
      {/* Heading + Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-orbitron font-bold mb-6">
          Our Clients
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-text-muted font-rajdhani max-w-3xl mx-auto leading-relaxed">
          Our clients are at the heart of everything we do. We go beyond delivering
          designs. We build partnerships founded on trust, responsiveness, and
          excellence. Every project is approached with the same commitment: to
          listen closely, adapt quickly, and deliver solutions that exceed
          expectations. Whether it’s meeting strict compliance standards,
          achieving ESG goals, or solving complex infrastructure challenges, we do
          whatever it takes to ensure our clients’ success and satisfaction.
        </p>
      </motion.div>

      {/* Clients Logos */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
      >
        {clients.map((client) => (
          <motion.div
            key={client.name}
            variants={itemVariants}
            className="flex flex-col items-center justify-center p-3 bg-surface/70 backdrop-blur-sm rounded-xl border border-gray-300"
          >
            <Image
              src={client.logo}
              alt={client.name}
              width={80}
              height={80}
              className="w-25 h-25 object-contain mb-4 transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]"
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
