"use client"

import { motion } from "framer-motion"

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer className="bg-black border-t border-primary/20 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-primary mb-4">VOTY</h3>
            <p className="text-foreground/70">Empowering Nigerian youth through education, ethics, and skills.</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2 text-foreground/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-primary mb-4">Legal</h4>
            <ul className="space-y-2 text-foreground/70">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold text-primary mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {["facebook", "twitter", "instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary flex items-center justify-center text-primary hover:bg-primary/10 transition-all hover:scale-110"
                  aria-label={social}
                >
                  <span className="text-lg">📱</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Closing Message */}
        <motion.div
          className="text-center border-t border-primary/20 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-2xl italic text-primary mb-4">
            Promoting inspiration and accountability – Your voice matters.
          </p>
          <p className="text-foreground/60 mb-6">
            If you&apos;re a teen or educator in Nigeria, this is your hub for motivational and learning tools.
          </p>
          <button className="px-8 py-3 bg-primary text-black rounded-full font-bold hover:bg-primary/90 transition-all glow-gold-hover">
            Get Started
          </button>
        </motion.div>

        {/* Copyright */}
        <div className="text-center text-foreground/50 text-sm mt-8">
          <p>&copy; 2025 VOTY - Voice of the Teenagers and the Youths. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
