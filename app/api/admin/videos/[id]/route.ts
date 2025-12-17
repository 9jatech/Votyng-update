import { NextResponse } from "next/server"

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const { id } = params
  const body = await request.json()
  const { status } = body

  // Mock video approval - replace with actual database update
  console.log(`Video ${id} status updated to ${status}`)

  return NextResponse.json({
    success: true,
    message: `Video ${status}`,
  })
}
