"use client"

import { useEffect, useState } from "react"

interface SessionUser {
  name: string
  email: string
  role: "user" | "admin"
  isSubscribed: boolean
}

export function useSessionUser() {
  const [user, setUser] = useState<SessionUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const storedUser = localStorage.getItem("votyUser")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch {
        // Demo user fallback
        setUser({
          name: "ADEMONRIN",
          email: "demo@voty.com",
          role: "user",
          isSubscribed: true,
        })
      }
    } else {
      // Mock demo user for dashboard demo
      setUser({
        name: "ADEMONRIN",
        email: "demo@voty.com",
        role: "user",
        isSubscribed: true,
      })
    }
    setLoading(false)
  }, [])

  return { user, loading }
}
