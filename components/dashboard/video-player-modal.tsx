"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Volume2, VolumeX, Maximize } from "lucide-react"

interface Video {
  id: string
  title: string
  subtitle: string
  thumbnail: string
  url: string
  duration: number
}

interface VideoPlayerModalProps {
  video: Video
  isOpen: boolean
  onClose: () => void
}

export default function VideoPlayerModal({ video, isOpen, onClose }: VideoPlayerModalProps) {
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="w-full max-w-4xl bg-black rounded-xl overflow-hidden"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-card p-4 flex justify-between items-center border-b border-primary/30">
              <div>
                <h3 className="text-lg font-bold text-white">{video.title}</h3>
                <p className="text-sm text-primary">{video.subtitle}</p>
              </div>
              <button
                onClick={onClose}
                className="text-gold hover:text-gold/80 transition p-2"
                aria-label="Close player"
              >
                <X size={24} />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative w-full bg-black aspect-video">
              <iframe
                src={`${video.url}?autoplay=1`}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
                title={video.title}
              />
            </div>

            {/* Controls */}
            <div className="bg-card p-4 border-t border-primary/30 flex justify-between items-center">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-gold hover:text-gold/80 transition p-2"
                aria-label="Toggle mute"
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
              <button className="text-gold hover:text-gold/80 transition p-2" aria-label="Fullscreen">
                <Maximize size={20} />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
