"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

interface HeaderProps {
  isScrolled: boolean
}

export default function Header({ isScrolled }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm border-b border-primary/20" : "bg-transparent"
      }`}
      initial={{ y: 0 }}
      animate={{ y: 0 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
            <Image src="/voty-logo.png" alt="VOTY Logo" width={40} height={40} className="h-10 w-auto" priority />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
            >
              Contact Us
            </Link>
            <Link
              href="/sign-up"
              className="px-6 py-2 bg-primary text-black rounded-full font-bold hover:bg-primary/90 transition-all glow-gold-hover"
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              className="px-6 py-2 border border-primary text-primary rounded-full font-bold hover:bg-primary/10 transition-all"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            className="md:hidden mt-4 pb-4 flex flex-col gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact Us
            </Link>
            <Link href="/sign-up" className="px-6 py-2 bg-primary text-black rounded-full font-bold w-full text-center">
              Sign Up
            </Link>
            <Link
              href="/login"
              className="px-6 py-2 border border-primary text-primary rounded-full font-bold w-full text-center"
            >
              Login
            </Link>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
