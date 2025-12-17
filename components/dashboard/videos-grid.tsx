"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import VideoCard from "./video-card"
import VideoPlayerModal from "./video-player-modal"

interface Video {
  id: string
  title: string
  subtitle: string
  thumbnail: string
  url: string
  duration: number
  participantCount: number
}

export default function VideosGrid() {
  const [videos, setVideos] = useState<Video[]>([])
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const mockVideos: Video[] = [
      {
        id: "1",
        title: "Moral Story: Integrity Wins",
        subtitle: "Learn the power of honesty",
        thumbnail: "/nigerian-teens-learning-integrity-lesson.jpg",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: 1200,
        participantCount: 1247,
      },
      {
        id: "2",
        title: "Educational Discussion",
        subtitle: "Youth empowerment insights",
        thumbnail: "/diverse-nigerian-youth-in-educational-discussion.jpg",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: 900,
        participantCount: 2456,
      },
      {
        id: "3",
        title: "Trivia Challenge",
        subtitle: "Test your knowledge",
        thumbnail: "/nigerian-teen-excited-about-trivia-challenge.jpg",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: 600,
        participantCount: 892,
      },
      {
        id: "4",
        title: "Success Testimonial",
        subtitle: "Inspiring young stories",
        thumbnail: "/nigerian-youth-celebrating-success-achievement.jpg",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: 1500,
        participantCount: 3104,
      },
      {
        id: "5",
        title: "Career Guidance",
        subtitle: "Find your passion",
        thumbnail: "/nigerian-teens-learning-career-opportunities.jpg",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: 1800,
        participantCount: 1567,
      },
      {
        id: "6",
        title: "Skill Building Workshop",
        subtitle: "Develop essential skills",
        thumbnail: "/nigerian-youth-in-skill-building-workshop.jpg",
        url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        duration: 2100,
        participantCount: 2789,
      },
    ]

    setTimeout(() => {
      setVideos(mockVideos)
      setLoading(false)
    }, 500)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  }

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="bg-card rounded-lg h-64 animate-pulse" />
        ))}
      </div>
    )
  }

  return (
    <>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {videos.map((video) => (
          <motion.div key={video.id} variants={itemVariants}>
            <VideoCard
              video={{
                id: video.id,
                title: video.title,
                subtitle: video.subtitle,
                participants: video.participantCount,
                duration: `${Math.floor(video.duration / 60)}m`,
              }}
              onSelect={() => setSelectedVideo(video)}
            />
          </motion.div>
        ))}
      </motion.div>

      {selectedVideo && (
        <VideoPlayerModal video={selectedVideo} isOpen={!!selectedVideo} onClose={() => setSelectedVideo(null)} />
      )}
    </>
  )
}
