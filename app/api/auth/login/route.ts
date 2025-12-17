import { NextResponse } from "next/server"

const DEMO_USER = {
  email: "demo@voty.com",
  password: "Demo@12345",
  id: "demo-user-1",
  name: "Demo User",
  role: "user",
  subscription: {
    status: "active",
    expiresAt: "2025-12-31",
  },
}

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json()

    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      const token = Buffer.from(JSON.stringify({ userId: DEMO_USER.id, timestamp: Date.now() })).toString("base64")

      return NextResponse.json({
        success: true,
        token,
        user: {
          id: DEMO_USER.id,
          name: DEMO_USER.name,
          email: DEMO_USER.email,
          role: DEMO_USER.role,
          subscription: DEMO_USER.subscription,
        },
      })
    }

    return NextResponse.json(
      {
        success: false,
        message: "Invalid email or password",
      },
      { status: 401 },
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred during login",
      },
      { status: 500 },
    )
  }
}
