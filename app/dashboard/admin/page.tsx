"use client"

import { motion } from "framer-motion"
import AdminPanel from "@/components/dashboard/admin-panel"

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl md:text-5xl font-bold text-gold mb-4">Admin Dashboard</h1>
        <p className="text-muted-foreground mb-8">Manage videos, votes, and prizes</p>
      </motion.div>

      <AdminPanel />
    </div>
  )
}
