import { NextResponse } from "next/server"

export async function GET(request: Request, { params }: { params: { videoId: string } }) {
  const { videoId } = params

  // Mock data - replace with actual database query
  const progress = {
    videoId,
    progress: 0,
    duration: 1200,
    lastWatched: new Date().toISOString(),
  }

  return NextResponse.json(progress)
}

export async function PUT(request: Request, { params }: { params: { videoId: string } }) {
  const { videoId } = params
  const body = await request.json()

  // Mock update - replace with actual database update
  console.log(`Updated progress for video ${videoId}:`, body)

  return NextResponse.json({
    success: true,
    message: "Progress updated",
  })
}
