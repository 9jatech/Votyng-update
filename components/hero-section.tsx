"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image src="/nigerian-youth-collaboration-empowerment.jpg" alt="Hero background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* Gold Gradient Overlay */}
      <div className="absolute inset-0 z-1 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-primary/20 to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary mb-6" variants={itemVariants}>
          Voice of the Teenagers and the Youths
        </motion.h1>

        <motion.p className="text-xl sm:text-2xl text-foreground mb-8" variants={itemVariants}>
          Empowering Tomorrow&apos;s Leaders Today
        </motion.p>

        <motion.p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto" variants={itemVariants}>
          Inspiring growth through education, ethics, and skills. Hear and be heard.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={itemVariants}>
          <button className="px-8 py-3 bg-primary text-black rounded-full font-bold text-lg hover:bg-primary/90 transition-all glow-gold-hover">
            Join the Movement
          </button>
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-full font-bold text-lg hover:bg-primary/10 transition-all">
            Learn More
          </button>
        </motion.div>
      </motion.div>

      {/* Floating Sparkles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.6,
            repeat: Number.POSITIVE_INFINITY,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </section>
  )
}
