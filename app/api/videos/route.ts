import { NextResponse } from "next/server"

export async function GET() {
  // Mock data - replace with actual database query
  const videos = [
    {
      id: "1",
      title: "Moral Story: Integrity Wins",
      subtitle: "Learn the power of honesty",
      thumbnail: "/placeholder.svg",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: 1200,
    },
    {
      id: "2",
      title: "Educational Discussion",
      subtitle: "Youth empowerment insights",
      thumbnail: "/placeholder.svg",
      url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      duration: 900,
    },
  ]

  return NextResponse.json(videos)
}
