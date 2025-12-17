"use client"

import { motion } from "framer-motion"
import { Play, Users, Clock } from "lucide-react"

interface VideoCardProps {
  video: {
    id: string | number
    title: string
    description?: string
    subtitle?: string
    thumb?: string
    participants: number
    duration?: string
  }
  onSelect?: (video: any) => void
}

export default function VideoCard({ video, onSelect }: VideoCardProps) {
  const participantCount = video.participants ?? 0

  return (
    <motion.div
      className="group cursor-pointer"
      whileHover={{ scale: 1.05, y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={() => onSelect?.(video)}
    >
      <div className="relative rounded-lg overflow-hidden bg-card border border-primary/20 group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all h-72 bg-gradient-to-br from-primary/20 to-background flex flex-col justify-between p-4">
        {/* Badge - Participants */}
        <motion.div className="bg-primary/20 border border-primary/30 rounded-full px-3 py-1 text-xs text-primary font-semibold flex items-center gap-1 w-fit z-10">
          <Users size={12} />
          <span className="text-white">{participantCount.toLocaleString()}</span>
        </motion.div>

        {/* Overlay with Play Button */}
        <motion.div
          className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100"
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="bg-primary text-black rounded-full p-4 hover:bg-primary/90 transition-colors glow-gold-hover"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.95 }}
            aria-label={`Play ${video.title}`}
          >
            <Play size={24} fill="currentColor" />
          </motion.button>
        </motion.div>

        {/* Info - Bottom */}
        <div className="mt-auto space-y-2">
          <h3 className="text-sm font-bold text-white line-clamp-2">{video.title}</h3>
          <p className="text-xs text-primary line-clamp-1">{video.description || video.subtitle}</p>
          {video.duration && (
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock size={12} />
              <span>{video.duration}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
