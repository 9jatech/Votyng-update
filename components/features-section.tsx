"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const features = [
  {
    title: "Educational Content",
    description: "Interactive elements like trivia and storytelling designed to build character and knowledge.",
    image: "/nigerian-boy-on-mobile-quiz-educational.jpg",
    icon: "📚",
  },
  {
    title: "Rewards and Incentives",
    description: "Opportunities for scholarships and recognition of academic and ethical achievements.",
    image: "/nigerian-youth-celebrating-scholarship-win.jpg",
    icon: "🏆",
  },
  {
    title: "Partnerships",
    description:
      "Collaborations with Nigerian government ministries and organizations to amplify impact and ensure credibility.",
    image: "/professional-group-discussing-youth-programs-niger.jpg",
    icon: "🤝",
  },
  {
    title: "Target Audience",
    description: "Primarily teenagers and youths in Nigeria, with a focus on holistic development.",
    image: "/nigerian-teens-brainstorming-together.jpg",
    icon: "👥",
  },
]

export default function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center text-primary mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Core Features
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="border border-primary rounded-lg p-6 hover:shadow-lg transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(212, 175, 55, 0.3)" }}
            >
              {/* Icon and Title */}
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-primary mb-3">{feature.title}</h3>

              {/* Description */}
              <p className="text-foreground/80 mb-6">{feature.description}</p>

              {/* Image */}
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
